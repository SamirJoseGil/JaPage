import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import Jaipera from './pages/Jaipera';
import Welcome from './pages/Welcome';
import Sena from './pages/Sena';

import './styles/App.css';
import './styles/utils.css';

const links = [
  {
    url: 'https://fyepesa.github.io/trabajo.github.io/',
    title: 'SINERGIA ',
    description: 'Esta pagina esta enfocada en mejorar el rendimiento de cada estudiante de acuerdo a su empeño, cuenta con ejercicios prácticos de refuerzo para afianzar conceptos básicos.',
    autors: 'Dana Mallerly, Denis Estefania, Diego Montoya, Marta Agudelo, Yuliana Sepulveda, Tomas Ibarra'
  },
  {
    url: 'https://proyecto-aleja.vercel.app/',
    title: 'Manual Digital de Ensamble y Desensamble',
    description: 'Este manual interactivo de ensamble y desensamble, desarrollado con HTML, CSS y JavaScript, guía paso a paso en el proceso de ensamblar y desensamblar componentes de un equipo de cómputo. Ofrece instrucciones claras con elementos visuales dinámicos, facilitando el aprendizaje práctico para usuarios sin experiencia previa.',
    autors: 'Alejandra Garcia, Salome Serna'
  }
];



export default function App() {
  const offcanvasRef = useRef(null);

  // Manejo de cerrar el Offcanvas con mayor seguridad
  const handleClose = () => {
    if (offcanvasRef.current) {
      const offcanvasElement = offcanvasRef.current;
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <>
      <Router>
        <header>
          <Navbar expand="lg" className="bg-body-tertiary green-border-bottom">
            <Container fluid>
              <Navbar.Brand href="/" className="d-flex align-items-center">
                <img src="/Img/Escudo.png" alt="Escudo" className="navbar-logo" />
                <strong>INSTITUCIÓN EDUCATIVA RURAL JAIPERA</strong>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                ref={offcanvasRef}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Menú de Navegación
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/" onClick={handleClose}>Inicio</Nav.Link>
                    <hr />
                    <Nav.Link as={Link} to="/Sena" onClick={handleClose}>SENA</Nav.Link>
                    <hr />
                    <Nav.Link href="https://sinai.net.co" target="_blank" rel="noopener noreferrer" onClick={handleClose}>SINAI</Nav.Link>
                    <hr />
                    <Nav.Link as={Link} to="/Politicas" onClick={handleClose}>Normatividad</Nav.Link>
                    <hr />
                    <Nav.Link as={Link} to="/Contactanos" onClick={handleClose}>Contáctanos</Nav.Link>
                    <hr />
                    <Nav.Link as={Link} to="/Jaipera" onClick={handleClose}>¿Quiénes somos?</Nav.Link>
                    <Nav.Link as={Link} to="/Noticias" onClick={handleClose}>Noticias</Nav.Link>
                    <hr />
                    <Nav.Link as={Link} to="/Manuales" onClick={handleClose}>Manuales</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </header>

        <main className="main-app">
          <Routes>
            <Route path="/Noticias" element={<FacebookPage pageUrl="https://www.facebook.com/institucioneducativa.jaipera" />} />
            <Route path="/Manuales" element={<Manuals />} />
            <Route path="/Welcome/*" element={<Welcome />} />
            <Route path="/Sena/*" element={<Sena />} />
            <Route path="/Politicas" element={<Politicas />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/Jaipera/*" element={<Jaipera />} />
            <Route path="*" element={<Welcome />} />
          </Routes>
        </main>

        <footer className="footer bg-dark text-white shadow-top">
          <div className="d-flex justify-content-between align-items-center py-3 container">
            <div className="d-flex align-items-center">
              <a href="https://www.facebook.com/institucioneducativa.jaipera" target="_blank" rel="noopener noreferrer" className="text-white d-flex align-items-center">
                <i className="fab fa-facebook fa-2x me-2 mini-margin-right"></i>
                <p className="mb-0">Síguenos en Facebook</p>
              </a>
            </div>
            <div>
              <p className="mb-0">&copy; 2024 - Institución Educativa Rural Jaipera</p>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

// Componente Contactanos
function Contactanos() {
  return (
    <div className='margin-top'>
      <h1>Contáctanos</h1>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '62vh' }}>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded blue-border" style={{ maxWidth: '600px' }}>
          <div className="card-header text-center blue-border blue-border background-blue">
            <h5><strong>Institución Educativa Jaiperá</strong></h5>
          </div>
          <div className="card-body text-start blue-border">
            <h5 className="card-text"><strong>Dirección:</strong> Cl. 39 #25-14, Urrao, Antioquia</h5>
            <h5 className="card-text"><strong>Horario de atención:</strong> 8:00 am - 3:00 pm</h5>
            <h5 className="card-text"><strong>Teléfono Conmutador:</strong> 604 8503593</h5>
            <h5 className="card-text"><strong>Correo institucional:</strong> <a href="mailto:secretaria@jaiperaurrao.ie.edu.co">secretaria@jaiperaurrao.ie.edu.co</a></h5>
            <h5 className="card-text"><strong>Correo de notificaciones judiciales:</strong> <a href="mailto:rectoria@jaiperaurrao.ie.edu.co">rectoria@jaiperaurrao.ie.edu.co</a></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente FacebookPage con mejor manejo del SDK de Facebook
const FacebookPage = ({ pageUrl }) => {
  return (
    <div className="container text-center">
      <h1>Noticias</h1>
      <div className="facebook-page">
        <iframe
          title="Facebook Page"
          className='custom-iframe'
          src={`https://www.facebook.com/plugins/page.php?href=${pageUrl}&tabs=timeline&width=1000&height=800`}
          width="1000"
          height="800"
          style={{ border: 'none', overflow: 'hidden' }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};


// Componente Politicas
function Politicas() {
  return (
    <div className='margin-top'>
      <h1>Políticas</h1>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '62vh' }}>
        <iframe
          src="/GFPI-M-004 Manual Articulación SENA con la Educación Media.pdf"
          title="Manual de Convivencia"
          className='custom-iframe'
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

// Componente Manuals
function Manuals() {
  return (
    <div className="container card mt-5">
      <div className="row card-body">
        {links.map((link, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{link.title}</Card.Title>
                <hr />
                <div className="text-justify">
                  <Card.Text>{link.description}</Card.Text>
                </div>
                <hr />
                <a className='btn btn-primary-custom' href={link.url} target="_blank" rel="noopener noreferrer">
                  Visitar
                </a>
                <hr />
                <div className='text-justify negrilla'>
                  <Card.Text>{link.autors}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}