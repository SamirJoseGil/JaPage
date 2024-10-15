import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
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
                    <div className="title-spacing green-border">
                        <h1 className="title-text">Institucion Educativa Rural Jaipera</h1>
                    </div>
                </div>
            </header>
            <div>
                <div className='container'> 
                    <Navbar bg="light" expand="lg" className='blue-border-bottom width-100'>
                        <Container fluid className='d-flex justify-content-center'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/Welcome">Inicio</Nav.Link>
                                    <Nav.Link as={Link} to="/Welcome/Pictures">Pictures</Nav.Link>
                                    <Nav.Link as={Link} to="/Welcome/Movies">Movies</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path="/" element={<MiniMain />} />
                    <Route path="Pictures" element={<Pictures />} />
                    <Route path="Movies" element={<Movies />} />
                </Routes>
            </div>
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

function Pictures() {
    const [images, setImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState(20);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/images.json');
                if (!response.ok) {
                    throw new Error('Error al cargar /images.json');
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setImages(data);
                } else {
                    console.error('Estructura incorrecta en /images.json');
                }
            } catch (error) {
                console.error('Error al cargar imágenes:', error);
            }
        };

        fetchImages();
    }, []);

    const loadMoreImages = () => {
        setVisibleImages(prevVisibleImages => prevVisibleImages + 10); // Cargar 10 imágenes más
    };

    const handleImageClick = (image) => {
        setSelectedImage(image); // Abrir modal al seleccionar imagen
    };

    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close-button')) {
            setSelectedImage(null); // Cerrar modal
        }
    };

    return (
        <div className="pictures-container">
            <h1>Galería de Imágenes</h1>
            <div className="movie-grid margin-top">
                {images.slice(0, visibleImages).map((image, index) => (
                    <div key={index} className="image-item" onClick={() => handleImageClick(image)}>
                        <img src={image} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </div>
            {visibleImages < images.length && (
                <button onClick={loadMoreImages} className="load-more-button">
                    Cargar más
                </button>
            )}
            {selectedImage && (
                <div className="modal" onClick={handleCloseModal} style={{ display: selectedImage ? 'flex' : 'none' }}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <img src={selectedImage} alt="Imagen seleccionada" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

function Movies() {
    const [movies, setMovies] = useState([]);
    const [visibleMovies, setVisibleMovies] = useState(20);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/movies.json');
                if (!response.ok) {
                    throw new Error(`Error al cargar /movies.json: ${response.statusText}`);
                }
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("El contenido recibido no es un JSON");
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setMovies(data);
                } else {
                    console.error('Estructura incorrecta en /movies.json');
                }
            } catch (error) {
                console.error('Error al cargar películas:', error);
            }
        };

        fetchMovies();
    }, []);

    const loadMoreMovies = () => {
        setVisibleMovies(prevVisibleMovies => prevVisibleMovies + 10); // Cargar 10 películas más
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Abrir modal al seleccionar película
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll en el cuerpo
    };

    const handleCloseModal = (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close-button')) {
            setSelectedMovie(null); // Cerrar modal
            document.body.style.overflow = 'auto'; // Habilitar scroll en el cuerpo
        }
    };

    useEffect(() => {
        if (selectedMovie && videoRef.current) {
            videoRef.current.play(); // Reproducir el video cuando se abre el modal
        }
    }, [selectedMovie]);

    return (
        <div className="movies-container">
            <h1>Galería de Películas</h1>
            <div className="movie-grid margin-top">
                {movies.slice(0, visibleMovies).map((movie, index) => (
                    <div key={index} className="movie-item" onClick={() => handleMovieClick(movie)}>
                        <video src={movie.poster} alt={`Película ${index + 1}`} controls={false} />
                    </div>
                ))}
            </div>
            {visibleMovies < movies.length && (
                <button onClick={loadMoreMovies} className="load-more-button">
                    Cargar más
                </button>
            )}
            {selectedMovie && (
                <div className="modal" onClick={handleCloseModal} style={{ display: selectedMovie ? 'flex' : 'none' }}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <video ref={videoRef} src={selectedMovie.poster} alt="Película seleccionada" className="modal-video" controls />
                    </div>
                </div>
            )}
        </div>
    );
}

function MiniPictures() {
    const [images, setImages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/images.json');
                if (!response.ok) {
                    throw new Error('Error al cargar /images.json');
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setImages(data);
                } else {
                    console.error('Estructura incorrecta en /images.json');
                }
            } catch (error) {
                console.error('Error al cargar imágenes:', error);
            }
        };

        fetchImages();
    }, []);

    const handleContainerClick = () => {
        navigate('/Welcome/Pictures');
    };

    return (
        <div className="mini-pictures-container" onClick={handleContainerClick}>
            <h2>Mini Galería de Imágenes</h2>
            <div className="mini-image-grid">
                {images.slice(0, 9).map((image, index) => (
                    <div key={index} className="mini-image-item">
                        <img src={image} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function MiniContactanos() {
    return (
        <div className='margin-top'>
            <div className='container d-flex justify-content-center align-items-center'>
                <div className='card  p-3 mb-5 bg-white rounded green-border'>
                    <div className='card-header text-center blue-border background-blue'>
                        <h2><strong>Contactanos</strong></h2>
                    </div>
                    <div className='card-body text-start blue-border'>
                        <h5><strong>Dirección:</strong> Cl. 39 #25-14, Urrao, Antioquia</h5>
                        <h5><strong>Horario: </strong> 8:00 am - 3:00 pm</h5>
                        <h5><strong>Teléfono:</strong> 604 8503593</h5>
                        <h5><strong>Correo:</strong> <a href="mailto:secretaria@jaiperaurrao.ie.edu.co">secretaria@jaiperaurrao.ie.edu.co</a></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MiniMain() {
    return (
        <div className='container'>
            <div className='d-flex'>
                <div className='col-6'>
                    <MiniPictures />
                </div>
                <div className='col-6'>
                    <div>
                        <div>
                            <MiniContactanos />
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.9142904047394!2d-76.1370840469319!3d6.326155941326951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e45e6e08e2cb419%3A0x81717c428d7363b7!2sInstituci%C3%B3n%20Educativa%20Jaiper%C3%A1!5e0!3m2!1sen!2sco!4v1728949092277!5m2!1sen!2sco"
                                width="550"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='margin-top'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

