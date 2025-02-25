import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Biography from './pages/Biography.tsx';
import Interests from './pages/Interests.tsx';
import Skills from './pages/Skills.tsx';
import Resume from './pages/Resume.tsx';
import Gallery from './pages/Gallery.tsx';
import ContactForm from './pages/ContactForm.tsx';
import Home from './pages/Home.tsx';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;