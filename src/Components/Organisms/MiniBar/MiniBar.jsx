import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function MiniBar() {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Nav.Item>
                    <Nav.Link as={Link} to="/Welcome">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Fotos">Fotos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Videos">Videos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/Descripcion">Descripcion</Nav.Link>
                </Nav.Item>
            </Container>
        </Navbar>
    );
}

export default MiniBar;