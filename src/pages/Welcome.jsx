import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';

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
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/movingImages/images.json'); // Ruta al archivo JSON
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const imagesList = await response.json();
                setImages(imagesList);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambiar imagen cada 5 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='ImagesBackground'>
            <div className='ImagesContainer'>
                {images.length > 0 && images.map((image, index) => (
                    <img
                        key={index}
                        src={`/movingImages/${image}`}
                        alt={`Moving ${index}`}
                        className={`MovingImages ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
            <button className="prevButton" onClick={handlePrevClick}>&#129152;</button>
            <button className="nextButton" onClick={handleNextClick}>&#129154;</button>
        </div>
    );
}