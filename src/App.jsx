import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';

import Jaipera from './pages/Jaipera'
import Welcome from './pages/Welcome'
import Sena from './pages/Sena'

import './styles/App.css'
import './styles/utils.css'

export default App

function App() {

  return (
    <>
      <Router>
        <header>
          <Navbar expand="lg" className="bg-body-tertiary green-border-bottom">
            <Container fluid className="d-flex justify-content-between align-items-center">
              <Navbar.Brand href='/' className="d-flex align-items-center">
                <img src="/Img/Escudo.png" alt="Escudo" className="navbar-logo" />
                <strong>INSTITUCIÓN EDUCATIVA RURAL JAIPERA</strong>
              </Navbar.Brand>
              <div className="d-flex">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/Sena">SENA</Nav.Link>
                    <Nav.Link href="https://sinai.net.co" target="_blank" rel="noopener noreferrer">SINAI</Nav.Link>
                    <Nav.Link as={Link} to="/Politicas">Normatividad</Nav.Link>
                    <Nav.Link as={Link} to="/Contactanos">Contáctanos</Nav.Link>
                    <Nav.Link as={Link} to="/Jaipera">¿Quiénes somos?</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
        </header>
        <main className="main-app">
          <Routes>
            <Route path="/Welcome/*" element={<Welcome />} />
            <Route path="/Sena/*" element={<Sena />} />
            <Route path="/Politicas" element={<Politicas />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/Jaipera/*" element={<Jaipera />} />
            <Route path="*" element={<Welcome />} />
          </Routes>
        </main>
      </Router>
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
    </>
  )
}

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


function Politicas() {
  return (
    <div className='margin-top'>
      <h1>Políticas</h1>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '62vh' }}>
        <iframe
          src="/public/GFPI-M-004 Manual Articulación SENA con la Educación Media.pdf"
          title="Manual de Convivencia" 
          className='custom-iframe'
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}