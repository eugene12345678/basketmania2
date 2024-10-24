import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compoents/Navbar.jsx';
import Home from './compoents/Home.jsx';
import About from './compoents/About.jsx';
import SignUpModal from './compoents/SignupModal.jsx';
import TeamLogoSlider from './compoents/TeamLogoSlider.jsx';
import Fixtures from './compoents/Fixtures.jsx';
import Footer from './compoents/Footer.jsx';
import App1 from './compoents/App1.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignUpModal />} />
      </Routes>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <TeamLogoSlider />
        <Fixtures />
      </div>
      <App1 />
      <Footer />
    </Router>
  );
}

export default App;
