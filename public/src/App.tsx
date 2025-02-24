import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Biography from './pages/Biography';
import Interests from './pages/Interests';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import ContactForm from './pages/ContactForm';
import Home from './pages/Home';
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