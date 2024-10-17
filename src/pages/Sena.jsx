import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default SENA;

function SENA() {
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center margin-right">
                    <img src="/Img/LogoSena.png" alt="Logo SENA" className='logo-sena mini-margin' />
                    <h1 className='title-sena mini-margin'>SENA</h1>
                </div>
            </div>
            <div className='container'>
                <Navbar bg="light" expand="lg" className='orange-border-bottom width-100'>
                    <Container fluid className='d-flex justify-content-center'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/SENA">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/SENA/History">Historia del SENA</Nav.Link>
                                <Nav.Link as={Link} to="/SENA/MissionVision">Misión y Visión</Nav.Link>
                                <Nav.Link as={Link} to="/SENA/Symbols">Simbolos del SENA</Nav.Link>
                                <Nav.Link as={Link} to="/SENA/Agreement">Convenio SENA</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Routes>
                <Route path="/" element={
                    <div className="container">
                        <div className="card">
                            <h2>¿Quiénes Somos?</h2>
                            <div className="card-body text-start">
                                <p>
                                    El Servicio Nacional de Aprendizaje (SENA) es una institución colombiana dedicada a la formación profesional integral de los trabajadores, jóvenes y adultos del país. Desde su creación en 1957, el SENA ha sido un pilar fundamental en el desarrollo social, económico y tecnológico de Colombia, ofreciendo programas educativos que preparan a sus estudiantes para desempeñarse en actividades productivas que impactan positivamente a las regiones y al país. Con un enfoque en la educación técnica y tecnológica, el SENA busca contribuir al empleo decente, la generación de ingresos y la mejora de la productividad tanto de las personas como de las empresas.
                                </p>
                                <div className='text-center'>
                                    <img src="/Img/LogoSenaBackground.png" alt="Logo SENA Background" className='img-fluid sena-img-background margin-top' />
                                </div>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="History" element={<History />} />
                <Route path="MissionVision" element={<MissionVision />} />
                <Route path="Symbols" element={<Symbols />} />
                <Route path="Agreement" element={<Agreement />} />
            </Routes>
        </div>
    );
}

function History() {
    return (
        <div className="container">
            <div className="card">
                <h2>Historia del SENA</h2>
                <div className="card-body text-start">
                    <p>
                        Nacimos en el año 1957, durante el gobierno de la Junta Militar -posterior a la renuncia del General Gustavo Rojas Pinilla-. Nuestra función fue brindar formación profesional a trabajadores, jóvenes y adultos de la industria, el comercio, el campo, la minería y la ganadería. Esta institución surgió gracias a la iniciativa del economista cartagenero Rodolfo Martínez Tono, con el valioso apoyo de los trabajadores organizados, los empresarios, la iglesia y la Organización Internacional del Trabajo.
                    </p>
                    <p>
                        Desde nuestros inicios, siempre buscamos proporcionar <strong>instrucción técnica</strong> al empleado, <strong>formación complementaria</strong> para adultos, y ayudarles a los empleadores y trabajadores a <strong>establecer un sistema nacional de aprendizaje.</strong>
                    </p>
                    <p>
                        Nuestra Entidad que tiene una estructura conformada por <strong>trabajadores, empleadores y Gobierno</strong>, se llamó <strong>Servicio Nacional de Aprendizaje (SENA)</strong>, nombre que conserva en la actualidad. Desde ese entonces y hasta ahora, buscamos seguir conquistando nuevos mercados, suplimos a las empresas de mano calificada utilizando métodos modernos y continuamos trabajando para lograr un cambio de paradigma en cada uno de los procesos de la productividad.
                    </p>
                    <div className='text-center margin-top'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/U_exqn8Khpk" title="La historia del SENA contada por Rodolfo Martínez Tono" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MissionVision() {
    return (
        <div className="container">
            <div className="card">
                <h2>Misión y Visión</h2>
                <div className="card-body text-start">
                    <h3>Misión</h3>
                    <p>
                        El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país (Ley 119/1994).
                    </p>
                    <hr />
                    <h3>Visión</h3>
                    <p>
                        Para el año 2026, el Servicio Nacional de Aprendizaje - SENA estará a la vanguardia de la cualificación del talento humano, tanto a nivel nacional como internacional. Esto se logrará a través de la formación profesional integral, el empleo, el emprendimiento y el reconocimiento de aprendizajes previos. Nuestro objetivo es generar valor público y fortalecer la economía campesina, popular, verde y digital, siempre con un enfoque diferencial orientado a la construcción del cambio, la transformación productiva, la soberanía alimentaria y la consolidación de una paz total, materializando así la autonomía territorial, y promoviendo la justicia social, ambiental y económica.
                    </p>
                </div>
            </div>
        </div>
    )
}

function Symbols() {
    return (
        <div className="container">
            <div className="card">
                <h2>Simbolos Institucionales</h2>
                <div className="card-body text-start">
                    <h3>Escudo y Bandera</h3>
                    <p>El escudo y la bandera del SENA, fueron diseñados cuando se fundó nuestra institución y reflejan los tres sectores económicos dentro de los cuales operamos:</p>
                    <div className='container d-flex'>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <ol>
                                <li>El <a href="https://dle.rae.es/pi%C3%B1%C3%B3n">piñón</a>, representativo del sector industria.</li>
                                <li>El <a href="https://dle.rae.es/caduceo">caduceo</a>, asociado al de comercio y servicios.</li>
                                <li>El café, ligado al primario y extractivo.</li>
                            </ol>
                        </div>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <img src="/Img/EscudoSena.png" alt="Escudo SENA" className='escudo' />
                        </div>
                    </div>
                    <hr />
                    <h3>Logosímbolo</h3>
                    <div className='container d-flex'>
                        <div className='col-6 justify-content-center align-items-center'>
                            <p>El logósímbolo representa gráficamente los enfoques de la formación que impartimos en la que el individuo es el responsable de su propio proceso de aprendizaje. ​</p>
                        </div>
                        <div className='col-6 d-flex justify-content-center align-items-center'>
                            <img src="/Img/LogoSena.png" alt="Logo SENA" className='logosimbolo' />
                        </div>
                    </div>
                    <hr />
                    <h3>El Himno</h3>
                    <p>
                        El himno al SENA está compuesto por un coro y 4 estrofas.
                        A continuación, podrá encontrar la letra del himno SENA:
                    </p>
                    <div className='container custom-d-flex'>
                        <div className='col-12 col-md-6 justify-content-center align-items-center text-center'>
                            <p>
                                <strong>CORO</strong><br />
                                Estudiantes del SENA adelante<br />
                                Por Colombia luchad con amor<br />
                                Con el ánimo noble y radiante<br />
                                Transformémosla en mundo mejor
                            </p>
                            <p>
                                <strong>I</strong><br />
                                De la patria el futuro destino,<br />
                                en las manos del joven está,<br />
                                el trabajo es seguro camino,<br />
                                que el progreso a Colombia dará.
                            </p>
                            <p>
                                <strong>II</strong><br />
                                En la forja del SENA se forman,<br />
                                hombres libres que anhelan triunfar,<br />
                                con la ciencia y la técnica unidas,<br />
                                nuevos rumbos de paz trazarán.
                            </p>
                            <p>
                                <strong>III</strong><br />
                                Hoy la patria nos grita sentida,<br />
                                ¡estudiantes del SENA triunfad!<br />
                                solo así lograréis en la vida,<br />
                                más justicia, mayor libertad.
                            </p>
                            <p>
                                <strong>IV</strong><br />
                                Avancemos con fuerza guerrera,<br />
                                ¡estudiantes con firme tesón!<br />
                                que la patria en nosotros espera,<br />
                                su pacífica revolución.
                            </p>
                            <div className='text-center margin-top margin-right'>
                                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/ZejiOSVZMyI" title="Himno del SENA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 justify-content-center align-items-center">
                            <div>
                                <h5 className='text-center'><strong>¿Qué significa el himno del SENA?</strong></h5>
                                <p>
                                    Si alguna vez se ha preguntado lo que el SENA trata de contar en la letra del himno del SENA, se dará cuenta que este es un camino de superación tanto de hombres como de mujeres que comienzan una carrera para lograr un cambio positivo en la sociedad colombiana.
                                </p>
                                <p>
                                    Por esta razón, el trabajo y la formación con el SENA tiene como objetivo hacer posible que tanto los adolescentes como los adultos aprovechen las mejoras en Colombia y a su vez, hagan un mejor futuro para el país.
                                </p>
                                <p>
                                    Todo ello a través de los valores, los conocimientos y el desarrollo de habilidades que cada <strong>curso de formación del SENA</strong> ofrece a sus alumnos. De esta manera, se busca fortalecer los valores, criterios y habilidades para todos aquellos que aspiran a ser un profesional. <br />
                                </p>
                            </div>
                            <div className='margin-top'>
                                <h5 className='text-center'><strong>El himno del SENA y su significado</strong></h5>
                                <p>
                                    El propósito del <strong>himno de SENA</strong> es transmitir un mensaje a los estudiantes y al público sobre las oportunidades que el instituto ofrece a las personas para obtener una educación. <strong>El SENA himno</strong> también quiere que las personas que lo escuchen sientan que el SENA es una empresa que está dispuesta a ayudar a darles la experiencia que necesitan para tener éxito en la vida. <strong>El SENA ofrece cursos</strong> y oportunidades de educación año tras año que ayudan a las personas a cumplir sus objetivos en la vida.
                                </p>
                            </div>
                            <div className='margin-top'>
                                <h5 className='text-center'><strong>¿Quién creó el himno del SENA?</strong></h5>
                                <p>
                                    No hay mucho que contar sobre el <strong>autor del himno del SENA</strong>. Sólo podemos decir que la letra del himno del SENA la escribió Jesús Briceño y Luis Alfredo Sarmiento. En cuanto a la música, <strong>el himno del SENA completo</strong> es gracias a la composición de <strong>Daniel Marles Coro</strong>.
                                </p>
                                <p>
                                    Es interesante señalar que el <strong>himno del SENA Colombia</strong> se tocó por primera vez en público durante la ceremonia que otorgó oficialmente al SENA como centro de formación educativa del país en 1961. Antes de ese año, la <strong>letra himno SENA</strong> solía sonar en las ceremonias de homenaje a importantes educadores y directores de universidades, o en los actos de conmemoración del duro trabajo que supuso la creación del SENA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Agreement() {
    return (
        <div className="container">
            <div className="card">
                <h2>CONVENIO CON EL SENA</h2>
                <div className="card-body text-start">
                    <p>
                        Desde hace catorce años el SENA tiene un convenio con la institución educativa jaipera, el cual nos permite formarnos como técnicos en sistemas desde el grado décimo y once la cual desarrollamos como un aprendiz del SENA que se enfrentará a una sociedad tanto el ámbito personal como profesional.
                    </p>
                </div>
            </div>
        </div>
    )
}
