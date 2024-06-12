// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/skills" element={<Skills />} />
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/education' element={<Education/>}/>
            </Routes>
        </Router>
    );
};

export default App;