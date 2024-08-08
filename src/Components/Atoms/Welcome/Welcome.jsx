import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovingImages from '../../Molecules/MovingImages/MovingImages';
import MiniBar from '../../Organisms/MiniBar/MiniBar';
import MiniMain from '../../Organisms/MiniMain/MiniMain';
import Pictures from '../Pictures/Pictures';
import Movies from '../Movies/Movies';
import Description from '../Description/Description';

function Welcome() {
    return (
        <div>
            <header>
                <MovingImages />
                <Container>
                    <img src="" alt="" className='Shield' />
                    <img src="" alt="" className='Small_Shield' />
                    <h1>Institucion Educativa Rural Jaipera</h1>
                </Container>
            </header>
            <main>
                <MiniBar />
                <Routes>
                    <Route path="/MiniMain" element={<MiniMain />} />
                    <Route path="/Pictures" element={<Pictures />} />
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/Description" element={<Description />} />
                </Routes>
            </main>
        </div>
    );
}

export default Welcome;