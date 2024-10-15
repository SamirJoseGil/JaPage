import fs from 'fs';
import path from 'path';

// Ruta de la carpeta que contiene las imágenes (actualiza esta ruta)
const imageFolderPath = 'C:/Users/Samir Gil/Documents/GitHub/JaPage/public/movingImages';

// Función para actualizar el archivo JSON con las rutas de las imágenes
function updateImageList() {
  fs.readdir(imageFolderPath, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta:', err);
      return;
    }

    // Filtrar solo los archivos de imagen (puedes agregar más extensiones si es necesario)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Crear el array con los nombres de los archivos de imagen
    const imageList = JSON.stringify(imageFiles, null, 2);

    // Escribir el array en un archivo JSON en la misma carpeta
    fs.writeFile(path.join(imageFolderPath, 'images.json'), imageList, err => {
      if (err) {
        console.error('Error al escribir el archivo JSON:', err);
        return;
      }
      console.log('Archivo JSON actualizado con éxito.');
    });
  });
}

// Llamar a la función para actualizar el archivo JSON
updateImageList();