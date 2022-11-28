import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo_michi from '../../assets/img/logo_michi.png';
import { HashLink } from 'react-router-hash-link';
import Cookies from "universal-cookie";
import {
  BrowserRouter as Router
} from "react-router-dom";
//import Login from '../login/login';
const cookies = new Cookies();

export const Menu = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [buttonInicio, setButtonInicio] = useState('Cerrar sesión');

  useEffect(() => {
    {console.log(window.location.pathname)}
    (window.location.pathname === '/login')
    ? setButtonInicio('Iniciar Sesión')
    : setButtonInicio('Cerrar Sesión')
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

  const logout = ()=> {
    cookies.remove('_s');
    window.location.reload();
    setButtonInicio('Iniciar sesión')
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        
          <Navbar.Brand className="logo" href="/">
          <img src={logo_michi} alt="Logo" /><h1 className="social-icon-logo">Michi Things</h1>
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#equipo" className={activeLink === 'equipo' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('equipo')}>Equipo</Nav.Link>
              <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacto')}>Contáctenos</Nav.Link>
              <Nav.Link href="#login" className="navbar-text"><button className='vvd'><span>{buttonInicio}</span></button></Nav.Link>
            </Nav>
            {/* <span className="navbar-text">
              <HashLink to='#login'>
                <button className="vvd" onClick={() => logout() }><span>{buttonInicio}</span></button>
              </HashLink>
            </span> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
