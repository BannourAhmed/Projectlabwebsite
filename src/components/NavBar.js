import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import logo1 from '../assets/img/logo2.png';
import logo2 from '../assets/img/logo3.png';

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/LOGOBME.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="https://www.bme.hu/?language=en">
            <img src={logo} alt="BME" />
            
          </Navbar.Brand>

           <Navbar.Brand href="https://math.bme.hu/?language=en">
          <img src={logo2} alt="BMEMATH" />
          </Navbar.Brand>

          <Navbar.Brand href="https://hsdslab.math.bme.hu/en.html/">
          <img src={logo1} alt="HSDSLAB" />
          </Navbar.Brand>
         

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="#information" className={activeLink === 'information' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('information')}>Information</Nav.Link>
           <Nav.Link href="#deliverables" className={activeLink === 'deliverables' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('deliverables')}>Deliverables</Nav.Link>

              {/* <Nav.Link href="#grading" className={activeLink === 'grading' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Grading</Nav.Link> */}
              <Nav.Link href="#tips" className={activeLink === 'tips' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tips')}>Tips</Nav.Link>
              <Nav.Link href="#history" className={activeLink === 'history' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('history')}>History</Nav.Link>   

              <Nav.Link href="#available" className={activeLink === 'available' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('available')}>Projects</Nav.Link>

              {/* <Nav.Link href="#Previous" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Previous Projects</Nav.Link> */}

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="https://www.linkedin.com/in/roland-molontay-200207111/"><img src={navIcon1} alt="" /></a>
                <a href="https://math.bme.hu/~molontay/eng.html"><img src={navIcon2} alt="" /></a> */}
                {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
              </div>
              {/* <a href='https://math.bme.hu/'>
                 <button className="vvd"><span>BME MAIN PAGE</span></button> 
              </a> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
