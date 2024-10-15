import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';

export default Jaipera;

function Jaipera() {
    return (
        <div className='margin-top'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <img src="" alt="" className='' />
                    <h1 className=''>Quiénes Somos?</h1>
                </div>
            </div>
            <div className='container'>
                <Navbar bg="light" expand="lg" className='green-border-bottom width-100'>
                    <Container fluid className='d-flex justify-content-center'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/Jaipera">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/History">Historia</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/Horizont">Horizonte</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/InstitutionalValues">Valores</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/InstitutionalObjectives">Objetivos</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/InstitutionalSymbols">Simbolos Institucionales</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/PrinciplesFoundations">Principios y Fundamentos</Nav.Link>
                                <Nav.Link as={Link} to="/Jaipera/CoexistencialManual">Manual de Convivencia</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={
                        <div className="container">
                            <div className="card">
                                <h2>Institución Educativa Jaiperá</h2>
                                <div className="card-body text-start">
                                    <p>
                                        La Institución Educativa Rural Jaipera (I.E.R. Jaipera), ubicada en el municipio de Urrao, Antioquia, es una comunidad educativa comprometida con la formación integral de hombres y mujeres líderes, emprendedores, y responsables con el medio natural, social y familiar. Desde nuestra fundación en 1981, hemos trabajado para brindar una educación de calidad que prepare a nuestros estudiantes para enfrentar los desafíos del mundo actual, mediante la potenciación de habilidades académicas, investigativas, técnicas y tecnológicas.
                                    </p>
                                    <div className='text-center'>
                                        <img src="/Img/Jaipera.png" alt="Jaipera" className='img-fluid jaipera-img margin-top'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } />
                    <Route path="History" element={<History />} />
                    <Route path="Horizont" element={<Horizont />} />
                    <Route path="InstitutionalSymbols" element={<InstitucionalSymbols />} />
                    <Route path="InstitutionalValues" element={<InstitutionalValues />} />
                    <Route path="PrinciplesFoundations" element={<PrinciplesFoundations />} />
                    <Route path="InstitutionalObjectives" element={<InstitutionalObjectives />} />
                    <Route path="CoexistencialManual" element={<CoexistencialManual />} />
                </Routes>
            </div>
        </div>
    );
}

function History() {
    return (
        <div className="container">
            <div className="card">
                <h2>HISTORIA DEL COLEGIO</h2>
                <h5>RESEÑA HISTORICA</h5>
                <div className="card-body text-start">
                    <p>En el año de 1981 la asociación de padres de familia de la escuela “ Eduardo Uribe Botero ” encabezada por la señora Teresa Duque Higuita, en común acuerdo con la Junta de Acción Comunal del barrio Jaiperá; solicitaron la creación de una Concentración Educativa a la Secretaría de Educación y Cultura del Departamento de Antioquia, con el fin de que sus hijos y demás jóvenes pudieran continuar Educación Básica Secundaria; ya que a muchos les era imposible desplazarse hasta el Liceo Simón Bolívar o hasta la Normal Sagrada Familia. Dicha petición fue concedida en parte, a través del Distrito Educativo, que autorizó al Liceo Departamental Simón Bolívar para que desplazara un grado sexto (6°) a la escuela Uribe Botero, el cual funcionó como Sección del citado Liceo; siendo nombrada la profesora Rosa Idalia Higuita mediante Decreto No. 881 del 13 de Abril del 81 para dictar las áreas respectivas con la colaboración de los sacerdotes del Seminario en el área de Religión, de la educadora Teresa Duque profesora del Liceo Simón Bolívar en el área de Tecnológicas siendo, Rector el Señor Humberto Henao. Al cabo de un año fue trasladado a ésta sección el profesor Ramón Antonio Cossío Rivera, quien venía de la escuela rural integrada El Topacio por Decreto No. 1994 de octubre 14 de 1981 y la profesora existente pasó como seccional del Liceo siendo Rectora Luz Dary Marulanda. Desde el preciso momento en que se trasladó el grupo, la comunidad con la junta de Acción Comunal del barrio Jaiperá, construyeron 3 aulas y unidad sanitaria con auxilios conseguidos por intermedio del Doctor Iván Restrepo Gómez. También se siguió gestionando la creación de la concentración sin obtener respuesta positiva por parte de la secretaría de Educación.</p>
                </div>
                <div className='text-center'>
                    <img src="/Img/JaiperaEntrance.png" alt="entrada Jaipera" className='img-fluid margin-top jaipera-img'/>
                </div>
            </div>
        </div>
    )
}

function Horizont() {
    return (
        <div className="container">
            <div className="card">
                <h2>Horizonte Institucional</h2>
                <div className="card-body text-start">
                    <h3>VISIÓN:</h3>
                    <p>
                        En el año 2020 la I.E.R. Jaiperá del municipio de Urrao Antioquia será reconocida en el ámbito municipal, departamental y nacional por la formación integral de hombres y mujeres líderes, emprendedores y responsables con el medio natural, social y familiar, con habilidades académicas, investigativas, técnicas y tecnológicas para su inmersión en la vida laboral y universitaria.
                    </p>
                    <hr />

                    <h3>MISIÓN:</h3>
                    <p>
                        Mediante una educación integral en los niveles de preescolar, básica y media FORMAMOS hombres y mujeres comprometidos con el desarrollo personal, escolar, familiar y social; hombres y mujeres para la excelencia académica mediante la potenciación de virtudes técnicas y tecnológicas; hombres y mujeres con proyectos de vida exitosos fundamentados desde el respeto al otro y la dignidad humana.
                    </p>
                </div>
            </div>
        </div>
    )
}

function InstitutionalValues() {
    return (
        <div className="container">
            <div className="card">
                <h2>Nuestros Valores</h2>
                <div className="card-body text-start">
                    <p>
                        Para nuestra Institución Educativa Jaiperá los valores son las actitudes positivas, disposiciones permanentes de ánimo para obrar en consonancia con las grandes correcciones de lo que es bueno, mejor, óptimo y fundamental en la búsqueda de la  plena realización humana vivenciados en comunidad, y resultados de forjar en cierta forma, modos de vida cimentados mediante el testimonio colectivo en la Institución, la familia y comunidad en general
                    </p>
                    <p>
                        Será prioridad en nuestra Institución, la vivencia de los valores señalados en la Ley General de Educación y en particular los orientados hacia la práctica del RESPETO,  la TOLERANCIA,  la RESPONSABILIDAD,  y el ejercicio de la LIBERTAD,  para educar debidamente en todas las acciones con SOLIDARIDAD,  HONESTIDAD Y SENTIDO DE LA JUSTICIA  y  la PERTENENCIA con el Plantel.
                    </p>
                </div>
                <h5>
                    "CON RESPONSABILIDAD Y UNIDAD AVANCEMOS HACIA LA CALIDAD"
                </h5>
                <div className='text-center'>
                    <img src="/Img/JaiperaValue.png" alt="Valores Jaipera" className='margin-top img-fluid jaipera-img' />
                </div>
            </div>
        </div>
    )
}

function InstitutionalObjectives() {
    return (
        <div className="container">
            <div className="card">
                <h2>Objetivos institucionales</h2>
                <div className="card-body text-start">
                    <ol>
                        <li>
                            <p>
                                Fomentar en los(as) estudiantes principios y valores, para el desarrollo y crecimiento de su formación personal, actitudinal, cognoscitiva, sicomotora, socio-afectiva, mediante el acceso al conocimiento tecnológico y científico.
                            </p>
                        </li>
                        <li>
                            <p>
                                Estimular la autonomía, participación y compromiso de la persona, ubicándola en su entorno familiar, institucional, cultural y social para que logre su autorrealización y la de su comunidad.
                            </p>
                        </li>
                        <li>
                            <p>
                                Fomentar en los(as) estudiantes, la conservación y cuidado de su entorno, mejorando así el medo ambiente, con el uso racional de los recursos naturales y la prevención de desastres de su Municipio, Departamento y Nación.
                            </p>
                        </li>
                        <li>
                            <p>
                                Brindar apoyo pedagógico y profesional a los (as) estudiantes que presentan dificultades comportamentales y de aprendizaje para que se integren progresivamente a los procesos de formación.
                            </p>
                        </li>
                        <li>
                            <p>
                                Interactuar con la familia, brindando elementos de orientación y formación de sus hijos, a través de la escuela de padres, entrevistas personales, reuniones, capacitaciones entre otras.
                            </p>
                        </li>
                        <li>
                            <p>
                                Brindar espacios que permitan la participación democrática de la Comunidad Educativa, en la planeación, ejecución, control y evaluación del P.E.I., fortaleciendo su sentido de pertenencia.
                            </p>
                        </li>
                        <li>
                            <p>
                                Fomentar en los (as) estudiantes principios y valores, para el desarrollo y crecimiento de su formación personal, actitudinal, cognoscitiva, psicomotora, socio-afectiva, mediante la adquisición de competencias básicas, ciudadanas y laborales.
                            </p>
                        </li>
                        <li>
                            <p>
                                Promover el desarrollo humano de directivos y educadores que fortalezcan el desarrollo de competencias básicas, ciudadanas y laborales que incurran en una educación de calidad.
                            </p>
                        </li>
                        <li>
                            <p>
                                Brindar apoyo pedagógico y profesional a los (as) estudiantes que presentan dificultades comportamentales y de aprendizaje para que se integren a los procesos de formación.
                            </p>
                        </li>
                        <li>
                            <p>
                                Promover la formación con los padres de familia brindando elementos de orientación a través de la escuela de padres, entrevistas personales, visitas domiciliarias, reuniones, capacitaciones que permitan recuperar su protagonismo en la educación de sus hijos mediante acciones preventivas y correctivas.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

function InstitucionalSymbols() {
    return (
        <div className="container">
            <div className="card">
                <h2>Simbolos Institucionales</h2>
                <div className="card-body text-start">
                    <h3>La Bandera</h3>
                    <p></p>
                    <img src="" alt="" />
                    <hr />
                    <h3>El Escudo</h3>
                    <p></p>
                    <img src="" alt="" />
                    <hr />
                    <h3>El Himno</h3>
                    <p></p>
                    <div className="">
                    </div>
                </div>
            </div>
        </div>
    );
}

function PrinciplesFoundations() {
    return (
        <div className="container">
            <div className="card">
                <h2>Principios y fundamentos que orientan la Institución Educativa Jaiperá</h2>
                <div className="card-body text-start">
                    <ol>
                        <li>
                            <h4>Dignidad Humana:</h4>
                            <p>
                                Permite comprender que es aquello que reclama de sí mismo y de los otros respeto, estimación, cuidado, valoración por seres creados a imagen y semejanza de un Ser Superior, que llevan consigo unos derechos que les pertenecen y unos deberes estrechamente relacionados los cuales son fundamentados de la igualdad de todos los hombres y mujeres entre sí, para contribuir a la paz y a la convivencia.
                            </p>
                        </li>
                        <li>
                            <h4>Respeto:</h4>
                            <p>
                                Es crear un ambiente de seguridad y cordialidad, aceptando costumbres, creencias, hábitos, opiniones y gustos de la comunidad; implica valorar la dignidad de la persona a través del cumplimiento de sus deberes y derechos buscando un crecimiento humano e institucional.
                            </p>
                        </li>
                        <li>
                            <h4>Autoestima:</h4>
                            <p>
                                Es orientar a los (as) estudiantes en la búsqueda de una imagen real y positiva de sí mismos, conociendo sus fortalezas para cultivarlas siendo conscientes de sus debilidades para afrontarlas con inteligencia, seguridad y aceptación integral; aprendiendo que los más importante es SER.
                            </p>
                        </li>
                        <li>
                            <h4>Tolerancia:</h4>
                            <p>
                                Permite entender que cada ser humano es único e irrepetible; respetando, comprendiendo las formas de ser y sentir de los demás siendo diferentes en la forma de pensar, conduciéndolos a la paz y a la convivencia armoniosa.
                            </p>
                        </li>
                        <li>
                            <h4>Justicia:</h4>
                            <p>
                                Es encaminar a la comunidad educativa a contribuir mutuamente a que todos tengan las condiciones que les permita vivir dignamente, de acuerdo con el cumplimiento de sus deberes y derechos como personas en sus diferentes roles sociales; orientándolos así a que sean personas solidarias, cívicas, equitativas, atentas a respetar los derechos de los demás dejándose guiar por el sentimiento del deber y de la convivencia, valorando el esfuerzo personal y contribución a una sociedad.
                            </p>
                        </li>
                        <li>
                            <h4>Solidaridad:</h4>
                            <p>
                                Capacidad de compartir lo que se tiene, lo que se hace, lo que es con las personas que tienen a su lado; porque es necesario vivir, estudiar, luchar, jugar, hacer el bien pero en unidad: teniendo un grado de amor por todos los seres humanos, sin importar la raza, la religión, el sexo, la posición social, uniéndose con acciones y esfuerzos para lograr juntos un objetivo común que al mismo tiempo suaviza las cargas de responsabilidades siendo una clave para la paz.
                            </p>
                        </li>
                        <li>
                            <h4>Perdón:</h4>
                            <p>
                                Conduce a amarse y amar a los demás; practicando acciones honestas sana, libres, responsables que edifiquen y generan un mayor bien a su familia, a la Institución y comunidad en general.
                            </p>
                        </li>
                        <li>
                            <h4>Responsabilidad:</h4>
                            <p>
                                Conduce a nuestros estudiantes y estudiantes a interactuar, a comprometerse, a ser libres a convertirse en personas dignas de confianza y credibilidad; respondiendo por sus hechos y en ocasiones por lo que se hacen los demás y de su entorno para alcanzar un objetivo común.
                            </p>
                        </li>
                        <li>
                            <h4>Sentido de pertenencia:</h4>
                            <p>
                                Es llevar a la persona a cuidar su entorno familiar, Institucional, cultural, religiosos y social en cuanto a lo moral y lo material; sintiendo propio el lugar donde vive, estudia y trabaja; proyectando una imagen positiva y digna de sí misma, a través del compromiso, la lealtad, la constancia las responsabilidades y el respeto; convirtiéndose en ejemplo y admiración en su comunidad y poder y poder distribuido de la satisfacción de haber cumplido con su deber.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

function CoexistencialManual() {
    return (
      <div className='margin-top'>
        <h1>Manual de Convivencia</h1>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '62vh' }}>
          <iframe
            src="/Manual de Convivencia Jaipera.pdf"
            title="Manual de Convivencia"
            width="100%"
            height="650rem"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    );
  }