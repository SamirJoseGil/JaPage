import { Container } from "react-bootstrap";
import './FooterApp.css';

function FooterApp() {
    return (
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
    );
}

export default FooterApp;