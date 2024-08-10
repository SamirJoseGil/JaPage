import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';

import History from '../../Atoms/WhoAre/History/History';
import Horizont from '../../Atoms/WhoAre/Horizont/Horizont';
import InstitutionalValues from '../../Atoms/WhoAre/InstitutionalValues/InstitutionalValues';
import CoexistencialManual from '../../Atoms/WhoAre/CoexistencialManual/CoexistencialManual';
import InstitucionalSymbols from '../../Atoms/WhoAre/InstitucionalSymbols/InstitucionalSymbols';
import PrinciplesFoundations from '../../Atoms/WhoAre/PrinciplesFoundations/PrinciplesFoundations';
import InstitutionalObjectives from '../../Atoms/WhoAre/InstitutionalObjectives/InstitutionalObjectives';

function QuienesSomos() {

  return (
    <div>
      <h1>Quienes Somos?</h1>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/QuienesSomos">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/InstitutionalSymbols">Simbolos Institucionales</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/History">Historia</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/Horizont">Horizonte</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/InstitutionalValues">Valores</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/InstitutionalObjectives">Objetivos</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/PrinciplesFoundations">Principios y Fundamentos</Nav.Link>
                <Nav.Link as={Link} to="/QuienesSomos/CoexistencialManual">Manual de Convivencia</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <div className="card">
                <h2>Institución Educativa Jaiperá</h2>
                <div className="card-body text-start">
                  <p>
                    La Institución Educativa Rural Jaipera (I.E.R. Jaipera), ubicada en el municipio de Urrao, Antioquia, es una comunidad educativa comprometida con la formación integral de hombres y mujeres líderes, emprendedores, y responsables con el medio natural, social y familiar. Desde nuestra fundación en 1981, hemos trabajado para brindar una educación de calidad que prepare a nuestros estudiantes para enfrentar los desafíos del mundo actual, mediante la potenciación de habilidades académicas, investigativas, técnicas y tecnológicas.
                  </p>
                </div>
              </div>
            </div>
          } />
          <Route path="InstitutionalSymbols" element={<InstitucionalSymbols />} />
          <Route path="History" element={<History />} />
          <Route path="Horizont" element={<Horizont />} />
          <Route path="InstitutionalValues" element={<InstitutionalValues />} />
          <Route path="PrinciplesFoundations" element={<PrinciplesFoundations />} />
          <Route path="InstitutionalObjectives" element={<InstitutionalObjectives />} />
          <Route path="CoexistencialManual" element={<CoexistencialManual />} />
        </Routes>
      </div>
    </div>
  );
}

export default QuienesSomos;