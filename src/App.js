import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './pages/Header';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skill" element={<Skill/>} />
            <Route path="/testimonials" element={<Testimonials/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
