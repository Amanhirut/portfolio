// import './sidebar.css'
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "boxicons/css/boxicons.min.css";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={`header ${isMenuOpen ? 'sticky' : ''}`}>
//       <Link href="/" className="logo">Amare</Link>
//       <i
//         className='bx bx-menu'
//         id="menu-icon"
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//       ></i>

//       <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
//         <Link href="#home" className="active">Home</Link>
//         <Link href="#about">About</Link>
//         <Link href="#services">Services</Link>
//         <Link href="#portfolio">Portfolio</Link>
//         <Link href="#contact">Contact</Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import './sidebar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "boxicons/css/boxicons.min.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'sticky' : ''}`}>
      <Link href="/" className="logo">Amare</Link>
      <i
        className='bx bx-menu'
        id="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link href="#home" className="active">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
