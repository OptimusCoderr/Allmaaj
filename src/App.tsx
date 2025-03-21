import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Monogramming from './pages/Monogramming';
import LargeFormat from './pages/LargeFormat';
import RollupsBanners from './pages/RollupsBanners';
import Flags from './pages/Flags';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monogramming" element={<Monogramming />} />
            <Route path="/large-format" element={<LargeFormat />} />
            <Route path="/rollups-banners" element={<RollupsBanners />} />
            <Route path="/flags" element={<Flags />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;