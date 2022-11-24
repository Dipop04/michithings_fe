import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../michidads.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

export default class MichidadsCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      message: {
        text: '',
        show: false,
      },
      loading: false,
      michidad: {
        nombres: '',
        apellidos: '',
        email: '',
        contrasena: '',
        documento: '',
        telefono: '',
        suscripcion: '',
        condiciones: '',
        direccion: '',
        barrio: '',
        ciudad: '',
        departamento: '',
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  setValue(inicioe, value) {
    this.setState({
      michidad: {
        ...this.state.michidad,
        [inicioe]: value,
      },
    });
  }
  guardarMichidads() {
    this.setState({ loading: true });
    request
      .post('/michidads', this.state.michidad)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }
  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab('buscar');
  }
  render() {
    return (
      <Container id='michidads-crear-container'>
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Crear michidads</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('nombres', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('apellidos', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('email', e.target.value)} 
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password"
                onChange={(e) => this.setValue('contrasena', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>No. de documento</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('documento', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('telefono', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Suscripción</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('suscripcion', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Condiciones</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('condiciones', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('direccion', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Barrio</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('barrio', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('ciudad', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Departamento</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue('departamento', e.target.value)}
              />
            </Form.Group>
            <Button
              variant='primary'
              onClick={() => console.log(this.guardarMichidads())}
            >
              Guardar michidad
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
