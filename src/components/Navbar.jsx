// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import SignUpModal from './SignupModal';
// import About from './About';
// import '../App.css';

// const Navbar = () => {
//   const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
//   const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);  
//   const navigate = useNavigate();

//   const openSignInModal = () => setIsSignInModalOpen(true);
//   const closeSignInModal = () => setIsSignInModalOpen(false);

//   const openAbout = () => setIsAboutModalOpen(true);  
//   const closeAbout = () => setIsAboutModalOpen(false); 

//   const handleHomeClick = (event) => {
//     event.preventDefault();
//     navigate('/home');
//     window.location.reload();
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img
//           src="https://www.svgrepo.com/show/21317/basketball-ball.svg"
//           alt="icon"
//           className="navbar-icon"
//         />
//         <span className="navbar-name">BASKETMANIA</span>
//       </div>
//       <div className="navbar-right">
//         <ul className="navbar-links">
//           <li><Link to="/home" onClick={handleHomeClick}>Home</Link></li>
//           <li><span onClick={openAbout} style={{ cursor: 'pointer' }}>About</span></li>  {/* Use button to trigger About modal */}
//           <li><button onClick={openSignInModal} style={{ cursor: 'pointer' }}>Sign Up</button></li>
//         </ul>
//       </div>
//       <SignUpModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
//       <About isOpen={isAboutModalOpen} onClose={closeAbout} />  {/* Render the About modal */}
//     </nav>
//   );
// };

// export default Navbar

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpModal from './SignupModal';
import LoginModal from './LoginModal';  // Import the LoginModal
import About from './About';
import '../App.css';

const Navbar = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for LoginModal
  const navigate = useNavigate();

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

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
          <li><span onClick={openLoginModal} style={{ cursor: 'pointer' }}>Log In</span></li> {/* Change to Log In */}
        </ul>
      </div>
      <SignUpModal isOpen={isSignInModalOpen} onClose={() => setIsSignInModalOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onAuthSuccess={() => { /* Handle success */ }} />
      <About isOpen={isAboutModalOpen} onClose={closeAbout} />
    </nav>
  );
};

export default Navbar;
