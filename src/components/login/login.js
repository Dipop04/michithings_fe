import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import app from "../../app.json"
import './login.css';
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calculaExtracionSesion } from "../helper/helper";
import Loading from "../loading/loading"
import gatoSombra from "../../assets/img/gato_sombra.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const { APIHOST } = app;
const cookies = new Cookies();



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: '',
      pass: '',
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });

    axios.post(`${APIHOST}/usuarios/login`, {
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert('Usuario y/o contraseña invalidos');
        }
        else {
          cookies.set('_s', response.data.token, {
            path: '/',
            expires: calculaExtracionSesion(),
          });
          this.props.history.push('/productos');
          window.location.reload();
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <section className="login" id="login">
        <Container id="login-container">
          <Loading show={this.state.loading} />
          <Row >
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={gatoSombra} alt="Login" />
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <Row>
                      <h2> Iniciar Sesión</h2>
                    </Row>
                    <Row>
                      <Col
                        sm="12"
                        xs="12"
                        md={{ span: 8, offset: 2 }}
                        lg={{ span: 8, offset: 2 }}
                        xl={{ span: 8, offset: 2 }}
                      >
                        <Form>
                          <Form.Group>
                            <Form.Label >Usuario</Form.Label>
                            <Form.Control
                              onChange={(e) =>
                                this.setState({ usuario: e.target.value })}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label >
                              Contraseña
                            </Form.Label>
                            <Form.Control
                              type="password"
                              onChange={(e) =>
                                this.setState({ pass: e.target.value })
                              }
                            />
                          </Form.Group>
                          <Col size={12} className="px-1">
                          <Button className="vvd" onClick={()=> console.log(this.iniciarSesion())}>Ingresar</Button>
                          </Col>
                        </Form>
                      </Col>
                    </Row>
            </Col>
          </Row>
        </Container>
      </section >
    );
  }
}
