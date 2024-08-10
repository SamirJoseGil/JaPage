import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './MainBar.css';

function MainBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
            <Container fluid className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="/Welcome" className="d-flex align-items-center">
                    <img src="../../../../public/Img/Escudo.png" alt="Escudo" className="navbar-logo" />
                    <strong>I. E. R. Jaipera</strong>
                </Navbar.Brand>
                <div className="d-flex">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link as={Link} to="/Welcome">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/Sena">Sena</Nav.Link>
                            <Nav.Link href="https://sinai.net.co" target="_blank" rel="noopener noreferrer">Sinai</Nav.Link>
                            <Nav.Link as={Link} to="/Politicas">Politicas</Nav.Link>
                            <Nav.Link as={Link} to="/Contactanos">Contactanos</Nav.Link>
                            <Nav.Link as={Link} to="/QuienesSomos">Quienes Somos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default MainBar;