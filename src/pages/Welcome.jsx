import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';


const images = [
    '/ImgLayout/409090199_893417295913873_6431943884138392477_n.jpg',
    '/ImgLayout/409103605_894058042516465_3086056766359029981_n.jpg',
    '/ImgLayout/426383391_884813896774213_8697089442123622479_n.jpg',
    '/ImgLayout/426400078_887276146527988_6685702721640920374_n.jpg',
    '/ImgLayout/429510733_893417185913884_8989106216206896317_n.jpg',
    '/ImgLayout/438299173_935010291754573_2235743285604805511_n.jpg',
    '/ImgLayout/445221277_947692500486352_1983040342489269207_n.jpg',
];


export default Welcome;

function Welcome() {
    return (
        <div>
            <header className="position-relative">
                <MovingImages />
                <div className="overlay-image position-absolute d-flex align-items-end image-container">
                    <img src="/Img/Escudo.png" className='title-logo' />
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


function Description() {
    return (
        <div>
            <p className="description">Description</p>
        </div>  
    );
}


function Movies() {
    return (
      <div>
        <h1>Movies</h1>
      </div>
    );
}


function Pictures() {
    return (
      <div>
          <p>Fotos</p>
      </div>
    );
}

function MiniMain() {
    return (
        <div>
            <section className='ImageGallery'>
            </section>
            <section className='location'></section>
            <aside>
                <h2>Informacion</h2>
                <p>Correo</p>
                <p>Telefono</p>
                <p>Direccion</p>
            </aside>
        </div>
    );
}


function MovingImages() {
    return (
        <div className='ImagesBackground'>
            <div className='ImagesContainer'>
                {images.concat(images).map((src, index) => (
                    <img key={index} src={src} alt={`Moving ${index}`} className='MovingImages' />
                ))}
            </div>
        </div>
    );
}