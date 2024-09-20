import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import JobRoles from './pages/JobRoles';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'; // Import your Home page

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobRoles" element={<JobRoles />} />
      </Routes>
    </>
  );
};

export default App;
