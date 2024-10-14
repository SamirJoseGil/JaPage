import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';

import Jaipera from './pages/Jaipera'
import Welcome from './pages/Welcome'
import Sena from './pages/Sena'

import './styles/App.css'


export default App

function App() {
  return (
    <>        
    <Router>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary header-app" fixed='top'>
          <Container fluid className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="/Welcome" className="d-flex align-items-center">
              <img src="/Img/Escudo.png" alt="Escudo" className="navbar-logo" />
              <strong>INSTITUCION EDUCATIVA RURAL JAIPERA</strong>
            </Navbar.Brand>
            <div className="d-flex">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link as={Link} to="/Welcome">Inicio</Nav.Link>
                  <Nav.Link as={Link} to="/Sena">SENA</Nav.Link>
                  <Nav.Link href="https://sinai.net.co" target="_blank" rel="noopener noreferrer">SINAI</Nav.Link>
                  <Nav.Link as={Link} to="/Politicas">Normatividad</Nav.Link>
                  <Nav.Link as={Link} to="/Contactanos">Contactanos</Nav.Link>
                  <Nav.Link as={Link} to="/Jaipera">Quienes Somos</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </header>
      <main className="main-app">
          <div className="content">
            <Routes>
              <Route path="/Welcome/*" element={<Welcome />} />
              <Route path="/Sena/*" element={<Sena />} />
              <Route path="/Politicas" element={<Politicas />} />
              <Route path="/Contactanos" element={<Contactanos />} />
              <Route path="/Jaipera/*" element={<Jaipera />} />
              <Route path="*" element={<Welcome />} />
            </Routes>
          </div>
      </main>
      </Router>
      <footer className="footer bg-dark text-white">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p>
                            Faceboock
                        </p>
                        <img src="" alt="" className="FaceboockLogo Icon"/>
                    </div>
                    <div>
                        <p>
                            &copy; 2024 - Institucion Educativa Rural Jaipera
                        </p>
                    </div>
                </div>
            </Container>
      </footer>
    </>
  )
}


function Contactanos() {
  return (
    <div>
      <h1>Contactanos</h1>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '62vh' }}>
        <div className="card">
          <h5 className="card-text text-center"><strong>Institución Educativa Jaiperá</strong></h5>
          <div className="card-body text-start">
            <h5 className="card-text"><strong>Teléfono:</strong> 8503593</h5>
            <h5 className="card-text"><strong>Facebook:</strong> <a href="https://www.facebook.com/institucioneducativa.jaipera" target="_blank" rel="noopener noreferrer">@institucioneducativa.jaipera</a></h5>
            <h5 className="card-text"><strong>Email:</strong> <a href="mailto:institucioneducativajaipera@hotmail.com">institucioneducativajaipera@hotmail.com</a></h5>
          </div>
        </div>
      </div>
    </div>
  );
}


function Politicas() {
  return (
      <div>
          <h1>Politicas</h1>
      </div>
  );
}