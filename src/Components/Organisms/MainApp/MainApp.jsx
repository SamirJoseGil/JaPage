import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FooterApp from "../../Molecules/FooterApp/FooterApp";
import MainBar from "../MainBar/MainBar";

import Welcome from "../../Molecules/Welcome/Welcome";
import Sena from "../../Molecules/Sena/Sena";
import Politicas from "../../Atoms/Politicas/Politicas";
import Contactanos from "../../Atoms/Contactanos/Contactanos";
import QuienesSomos from "../../Molecules/QuienesSomos/QuienesSomos";

import './MainApp.css';

function MainApp() {
    return (
        <div className="main-app">
            <Router>
                <MainBar />
                <div className="content">
                    <Routes>
                        <Route path="/Welcome/*" element={<Welcome />} />
                        <Route path="/Sena/*" element={<Sena />} />
                        <Route path="/Politicas" element={<Politicas />} />
                        <Route path="/Contactanos" element={<Contactanos />} />
                        <Route path="/QuienesSomos/*" element={<QuienesSomos />} />

                        <Route path="*" element={<Welcome />} />
                    </Routes>
                </div>
            </Router>
            <FooterApp />
        </div>
    );
}

export default MainApp;