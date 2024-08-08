import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
            <Container fluid>
                <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/Welcome">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/Politicas">Politicas</Nav.Link>
                        <Nav.Link as={Link} to="/Contactanos">Contactanos</Nav.Link>
                        <Nav.Link as={Link} to="/QuienesSomos">Quienes Somos</Nav.Link>
                        <Nav.Link as={Link} to="/PlanesPro">Planes Pro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainBar;