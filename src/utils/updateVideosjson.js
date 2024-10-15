import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de carpetas de videos
const folders = [
  path.join(__dirname, '../../public/videoGallery')
];

// Ruta del archivo JSON final
const finalJsonFilePath = path.join(__dirname, '../../public/movies.json');

// Función para recolectar videos de todas las carpetas y escribir en un solo archivo JSON
const updateJsonFile = () => {
  const allVideos = [];

  folders.forEach(folder => {
    console.log(`Leyendo carpeta: ${folder}`);
    const files = fs.readdirSync(folder);

    console.log(`Archivos encontrados en ${folder}:`, files);

    // Filtrar solo archivos de video (puedes ajustar esto según tus necesidades)
    const videoFiles = files.filter(file => /\.(mp4|avi|mov|mkv)$/.test(file));
    console.log(`Archivos de video en ${folder}:`, videoFiles);

    // Agregar las rutas relativas de los videos al arreglo allVideos
    videoFiles.forEach((file, index) => {
      const relativePath = path.relative(path.join(__dirname, '../../public'), path.join(folder, file));
      allVideos.push({
        poster: `/${relativePath.replace(/\\/g, '/')}`,
        title: `Movie ${index + 1}`
      });
    });
  });

  console.log(`Escribiendo archivo JSON final en ${finalJsonFilePath}`);
  fs.writeFileSync(finalJsonFilePath, JSON.stringify(allVideos, null, 2), err => {
    if (err) {
      console.error(`Error al escribir el archivo JSON final:`, err);
    } else {
      console.log(`Archivo JSON final actualizado con éxito.`);
    }
  });

  // Leer el archivo JSON para verificar su contenido
  const data = fs.readFileSync(finalJsonFilePath, 'utf8');
  console.log(`Contenido del archivo JSON final:`, data);
};

// Monitorear las carpetas de videos para cambios
const watchers = folders.map(folder => {
  const watcher = chokidar.watch(folder, {
    persistent: true,
    ignoreInitial: true, // Ignorar los archivos iniciales para evitar bucles infinitos
    ignored: /videos\.json$/, // Ignorar el propio archivo JSON para evitar bucles infinitos
    depth: 0
  });

  // Eventos de cambio en la carpeta de videos
  watcher
    .on('add', path => {
      console.log(`Archivo añadido: ${path}`);
      updateJsonFile();
    })
    .on('unlink', path => {
      console.log(`Archivo eliminado: ${path}`);
      updateJsonFile();
    })
    .on('ready', () => {
      console.log(`Watcher listo para la carpeta: ${folder}`);
      updateJsonFile();
    });

  return watcher;
});

console.log(`Monitoreando cambios en las carpetas: ${folders.join(', ')}`);

// Salir del script una vez que todos los archivos JSON se hayan actualizado
Promise.all(watchers.map(watcher => new Promise(resolve => watcher.on('ready', resolve))))
  .then(() => {
    console.log('Todos los archivos JSON se han actualizado.');
    process.exit(0); // Salir del script con éxito
  });