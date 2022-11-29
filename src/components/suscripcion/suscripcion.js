import React from 'react';
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Suscripcion = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Suscríbete a nuestra tienda<br></br> y nunca te pierdas de las ofertas</h3>
              {status === 'sending' && <Alert>Enviando...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
                  <button type="submit">Suscribirse</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
