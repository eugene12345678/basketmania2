import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpModal from './SignupModal';
import LoginModal from './LoginModal'; // Import LoginModal
import About from './About';
import '../App.css';

const Navbar = ({ onLoginClick }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);  
  const navigate = useNavigate();

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  const openAbout = () => setIsAboutModalOpen(true);  
  const closeAbout = () => setIsAboutModalOpen(false); 

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate('/home');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://www.svgrepo.com/show/21317/basketball-ball.svg"
          alt="icon"
          className="navbar-icon"
        />
        <span className="navbar-name">BASKETMANIA</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/home" onClick={handleHomeClick}>Home</Link></li>
          <li><span onClick={openAbout} style={{ cursor: 'pointer' }}>About</span></li>  
          <li><button onClick={onLoginClick} style={{ cursor: 'pointer' }}>Login</button></li> {/* Trigger LoginModal */}
          <li><button onClick={openSignInModal} style={{ cursor: 'pointer' }}>Sign Up</button></li>
        </ul>
      </div>
      <SignUpModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
      <About isOpen={isAboutModalOpen} onClose={closeAbout} />  
    </nav>
  );
};

export default Navbar;
