import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import catImg from "../../assets/img/gato_feliz.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import '../../App.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "el corazón...", "la cama...", "el sofá..." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a Michi Things</span>
                <h1>{`Si tu gato te roba `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "el corazón...", "la cama...", "el sofá..." ]'><span className="wrap">{text}</span></span></h1>
                <span>
                <p><b>...¡MICHI THINGS es el lugar perfecto para ti!</b></p>
                  <p><b>A las personas que tenemos un gato, algunos nos consideran “especiales”. Y en cuanto tenemos más de uno, nos llaman “los locos de los gatos”. ¿Se habrán preguntado por qué querríamos tener uno, o incluso más gatos en nuestra vida? ¡Ojalá un día lo prueben por sí mismos! Para los felices afortunados, tenemos algo especial para ellos.</b></p>
                  <p><b>Encuentra todo lo que necesitas para los consentidos de la casa con nuestras increíbles productos.</b></p>
                  {/* <button href="#login" className="vvd" onClick={() => console.log('login')}><span>Iniciar sesión</span><ArrowRightCircle size={25} /></button> */}
                  </span>
                  </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                  <img src={catImg} alt="Gato Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
