import React from 'react';
import foto_karen from "../../assets/img/equipo/foto_karen.jpg";
import foto_vlad from "../../assets/img/equipo/foto_vlad.jpg";
import foto_petu from "../../assets/img/equipo/foto_petu.jpg";
import foto_diana from "../../assets/img/equipo/foto_diana.jpg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EquipoCard } from "./equipocard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Equipo = () => {

    const equipos = [
        {
            title: "Karen Melissa Rojas",
            description: "Gestora de proyecto",
            description2: "Karencilla es quien ayuda con nuestra coordinación, atenta a cumplir los compromisos y que la información fluya correctamente. Le encanta aprender, leer y sobre todo pasar tiempo con su familia.",
            imgUrl: foto_karen,
        },
        {
            title: "Vladimir Merchán",
            description: "Front-end",
            description2: "Vladimir es el creador de contenido. Siempre está pendiente de combinar formas y colores, y regalarte la mejor experiencia de usuario posible.",
            imgUrl: foto_vlad,
        },
        {
            title: "Priscila García Romop",
            description: "Tester",
            description2: "Pris es la tester, la más curiosa, siempre está probando nuestras apps. Revisa fallos, errores y usa todas las funciones antes de lanzar nuestras apps.",
            imgUrl: foto_petu,
        },
        {
            title: "Diana Patricia Ortiz Porras",
            description: "Back-end",
            description2: "Dianita es la chica del Back. Siempre está desarrollando nuevas ideas. Es la chica de los retos y nada le queda grande, ni siquiera el Back-end.",
            imgUrl: foto_diana,
        },
    ];

    return (
        <section className="equipo" id="equipo">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>Nuestro equipo</h1>
                                    <h2>¡Este es nuestro equipo de trabajo!</h2>
                                    <p>Como sabemos que eres una persona curiosa, aquí nos presentamos para que nos conozcamos mejor. ¡Anímate a participar de nuestro proyecto!</p>
                                    <Tab.Container id="equipos-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        equipos.map((equipo, index) => {
                                                            return (
                                                                <EquipoCard
                                                                    key={index}
                                                                    {...equipo}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
