import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';


export default Sena

function Sena() {
    return (
        <div>
            <h1>Sena</h1>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/Sena">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/History">Historia del Sena</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/MissionVision">Misión y Visión</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/Symbols">Simbolos del Sena</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/Agreement">Convenio Sena</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={
                        <div className="container">
                            <div className="card">
                                <h2>¿Quiénes Somos?</h2>
                                <div className="card-body text-start">
                                    <p>
                                        El Servicio Nacional de Aprendizaje (SENA) es una institución colombiana dedicada a la formación profesional integral de los trabajadores, jóvenes y adultos del país. Desde su creación en 1957, el SENA ha sido un pilar fundamental en el desarrollo social, económico y tecnológico de Colombia, ofreciendo programas educativos que preparan a sus estudiantes para desempeñarse en actividades productivas que impactan positivamente a las regiones y al país. Con un enfoque en la educación técnica y tecnológica, el SENA busca contribuir al empleo decente, la generación de ingresos y la mejora de la productividad tanto de las personas como de las empresas.
                                    </p>
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
        </div>
    );
}


function MissionVision() {
    return (
        <div className="container">
            <div className="card">
                <h2>Misión y Visión</h2>
                <div className="card-body text-start">
                    <h3>Misión</h3>
                    <p>
                        El SENA está encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país.
                    </p>
                    <hr />
                    <h3>Visión</h3>
                    <p>
                        En el 2018 el SENA será reconocido por la efectividad de su gestión, sus aportes al empleo decente y a la generación de ingresos, impactando la productividad de las personas y de las empresas; que incidirán positivamente en el desarrollo de las regiones como contribución a una Colombia educada, equitativa y en paz.
                    </p>
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
                    </p>
                </div>
            </div>
        </div>
    )
}


function History() {
    return (
        <div className="container">
            <div className="card">
                <h2>Historia del Sena</h2>
                <div className="card-body text-start">
                    <p>
                        El SENA nació durante el gobierno de la Junta Militar, posterior a la renuncia del General Gustavo Rojas Pinilla, mediante el Decreto-Ley 118, del 21 de junio de 1957. Su función, definida en el Decreto 164 del 6 de agosto de 1957, fue brindar formación profesional a trabajadores, jóvenes y adultos de la industria, el comercio, el campo, la minería y la ganadería. Su creador fue Rodolfo  Martínez Tono.
                    </p>
                    <p>
                        Así mismo, siempre buscó proporcionar instrucción técnica al empleado, formación complementaria para adultos y ayudarles a los empleadores y trabajadores a establecer un sistema nacional de aprendizaje. La Entidad tiene una estructura tripartita, en la cual participarían trabajadores, empleadores y Gobierno, se llamó Servicio Nacional de Aprendizaje (SENA), que se conserva en la actualidad y que muchos años después, busca seguir conquistando nuevos mercados, suplir a las empresas de mano calificada utilizando para ello métodos modernos y lograr un cambio de paradigma en cada uno de los procesos de la productividad.
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
                    <h3>La Bandera</h3>
                    <p></p>
                    <img src="" alt="" />
                    <hr />
                    <h3>El Escudo</h3>
                    <p></p>
                    <img src="" alt="" />
                    <hr />
                    <h3>El Himno</h3>
                    <p></p>
                    <div className="container d-flex justify-content-center align-items-center">
                        <audio controls>
                            <source src="" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    )
}