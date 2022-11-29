import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FormularioEmail } from '../suscripcion/mail';
import logo_michi from '../../assets/img/logo_michi.png';
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <FormularioEmail />
          <Col size={12} sm={6}>
            <img src={logo_michi} alt="Logo" />
            <h2 className="social-icon-logo">Michi Things</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Misión TIC 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
