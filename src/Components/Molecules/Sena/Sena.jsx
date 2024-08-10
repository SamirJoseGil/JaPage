import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';

import SenaHistory from '../../Atoms/SenaComponents/SenaHistory/SenaHistory';
import SenaAgreement from '../../Atoms/SenaComponents/SenaAgreement/SenaAgreement';
import MissionVision from '../../Atoms/SenaComponents/MissionVision/MissionVision';
import SenaSymbols from '../../Atoms/SenaComponents/SenaSymbols/SenaSymbols';



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
                                <Nav.Link as={Link} to="/Sena/SenaHistory">Historia del Sena</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/MissionVision">Misión y Visión</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/SenaSymbols">Simbolos del Sena</Nav.Link>
                                <Nav.Link as={Link} to="/Sena/SenaAgreement">Convenio Sena</Nav.Link>
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
                    <Route path="SenaHistory" element={<SenaHistory />} />
                    <Route path="MissionVision" element={<MissionVision />} />
                    <Route path="SenaSymbols" element={<SenaSymbols />} />
                    <Route path="SenaAgreement" element={<SenaAgreement />} />
                </Routes>
            </div>
        </div>
    );
}

export default Sena;