import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Biography from './pages/Biography';
import Interests from './pages/Interests';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
    </div>
  );
}

export default App;