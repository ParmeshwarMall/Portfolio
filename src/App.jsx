// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Portfolio/" element={<Body />} />
                <Route path="/Portfolio/skills" element={<Skills />} />
                <Route path='/Portfolio/projects' element={<Projects/>}/>
                <Route path='/Portfolio/education' element={<Education/>}/>
                <Route path='/Portfolio/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    );
};

export default App;
