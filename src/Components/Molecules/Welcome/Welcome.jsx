import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

import MiniMain from '../../Atoms/WelcomeComponents/WelcomeMain/WelcomeMain';
import Pictures from '../../Atoms/WelcomeComponents/Pictures/Pictures';
import Movies from '../../Atoms/WelcomeComponents/Movies/Movies';
import Description from '../../Atoms/WelcomeComponents/Description/Description';
import MovingImages from '../MovingImages/MovingImages';

import './Welcome.css';

function Welcome() {
    return (
        <div>
            <header className="position-relative">
                <MovingImages />
                <div className="overlay-image position-absolute d-flex align-items-end image-container">
                    <img src="../../../../public/Img/Escudo.png" className='title-logo' />
                </div>
                <div className="overlay d-flex justify-content-center align-items-end">
                    <div className="title-spacing">
                        <h1>Institucion Educativa Rural Jaipera</h1>
                    </div>
                </div>
            </header>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/Welcome">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/Welcome/Pictures">Pictures</Nav.Link>
                                <Nav.Link as={Link} to="/Welcome/Movies">Movies</Nav.Link>
                                <Nav.Link as={Link} to="/Welcome/Description">Description</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<MiniMain />} />
                    <Route path="Pictures" element={<Pictures />} />
                    <Route path="Movies" element={<Movies />} />
                    <Route path="Description" element={<Description />} />
                </Routes>
            </div>
        </div>
    );
}

export default Welcome;