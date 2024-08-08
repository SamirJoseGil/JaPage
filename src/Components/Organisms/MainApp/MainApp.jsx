import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FooterApp from "../../Molecules/FooterApp/FooterApp";
import MainBar from "../MainBar/MainBar";
import Welcome from "../../Atoms/Welcome/Welcome";
import Politicas from "../../Atoms/Politicas/Politicas";
import Contactanos from "../../Atoms/Contactanos/Contactanos";
import QuienesSomos from "../../Atoms/QuienesSomos/QuienesSomos";
import PlanesPro from "../../Atoms/PlanesPro/PlanesPro";
import Pictures from "../../Atoms/Pictures/Pictures";
import Movies from "../../Atoms/Movies/Movies";
import Description from "../../Atoms/Description/Description";

function MainApp() {
    return (
        <div>
            <Router>
                <MainBar />
                <Routes>
                    <Route path="/Welcome" element={<Welcome />} />
                    <Route path="/Politicas" element={<Politicas />} />
                    <Route path="/Contactanos" element={<Contactanos />} />
                    <Route path="/QuienesSomos" element={<QuienesSomos />} />
                    <Route path="/PlanesPro" element={<PlanesPro />} />
                    <Route path="/Fotos" element={<Pictures />} />
                    <Route path="/Videos" element={<Movies />} />
                    <Route path="/Descripcion" element={<Description />} />
                    <Route path="/" element={<Welcome />} />
                </Routes>
            </Router>
            <FooterApp />
        </div>
    );
}

export default MainApp;