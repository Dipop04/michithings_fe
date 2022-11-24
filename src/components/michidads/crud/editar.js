import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../michidads.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPrompts from '../../prompts/confirmation';

export default class MichidadsEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idMichidad: this.props.getIdMichidad(),
      rediret: false,
      message: {
        text: '',
        show: false,
      },
      confirmation: {
        title: 'Modificar michidad',
        text: '¿Desea modificar el michidad?',
        show: false,
      },
      loading: false,
      michidad:{
        nombres: "",
        apellidos:"",
        email:"",
        contrasena:"",
        documento:"",
        telefono:"",
        suscripcion:"",
        condiciones:"",
        direccion:"",
        barrio:"",
        ciudad:"",
        departamento:"",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    this.getMichidad();
  }
  getMichidad() {
    this.setState({ loading: true });
    request
      .get(`/michidads/${this.state.idMichidad}`)
      .then((response) => {
        this.setState({
          michidad: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
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
      .put(`/michidads/${this.state.idMichidad}`, this.state.michidad)
      .then((response) => {
        if (response.data.exito) {
          this.props.changeTab('buscar');
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
  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation, 
        show: false,
      },
    })
  }
  onConfirm() {
    this.setState({
      confirmation: {
        ...this.state.confirmation, 
        show: false,
      },
    },
    this.guardarMichidads()
    );
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
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}  
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Editar michidads</h1>
        </Row>
        <Row>
        <Form>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Nombres</Form.Label>
              <Form.Control
              value={this.state.michidad.nombres}
                onChange={(e) => this.setValue('nombres', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
              value={this.state.michidad.apellidos}
                onChange={(e) => this.setValue('apellidos', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
              value={this.state.michidad.email}
                onChange={(e) => this.setValue('email', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={this.state.michidad.contrasena}
                onChange={(e) => this.setValue('contrasena', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>No. de documento</Form.Label>
              <Form.Control
              value={this.state.michidad.documento}
                onChange={(e) => this.setValue('documento', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
              value={this.state.michidad.telefono}
                onChange={(e) => this.setValue('telefono', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Suscripción</Form.Label>
              <Form.Control
              value={this.state.michidad.suscripcion}
                onChange={(e) => this.setValue('suscripcion', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Condiciones</Form.Label>
              <Form.Control
              value={this.state.michidad.condiciones}
                onChange={(e) => this.setValue('condiciones', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
              value={this.state.michidad.direccion}
                onChange={(e) => this.setValue('direccion', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Barrio</Form.Label>
              <Form.Control
              value={this.state.michidad.barrio}
                onChange={(e) => this.setValue('barrio', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
              value={this.state.michidad.ciudad}
                onChange={(e) => this.setValue('ciudad', e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasic'>
              <Form.Label>Departamento</Form.Label>
              <Form.Control
              value={this.state.michidad.departamento}
                onChange={(e) => this.setValue('departamento', e.target.value)}
              />
            </Form.Group>
            <Button
              variant='primary'
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
            >
              Guardar editar michidad
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
