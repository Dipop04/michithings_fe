import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../michidads.css';
import DataGrid from '../../grid/grid';
import ConfirmationPrompts from '../../prompts/confirmation';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

const columns = [
  {
    dataField: "_id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombres",
    text: "Nombres",
  },
  {
    dataField: "apellidos",
    text: "Apellidos",
  },
  {
    dataField: "email",
    text: "Correo electrónico",
  },
  {
    dataField: "contrasena",
    text: "Contraseña",
  },
  {
    dataField: "documento",
    text: " No. de documento",
  },
  {
    dataField: "telefono",
    text: "Teléfono",
  },
  {
    dataField: "suscripcion",
    text: "Suscripción",
  },
  {
    dataField: "condiciones",
    text: "Condiciones",
  },
  {
    dataField: "direccion",
    text: "Dirección",
  },
  {
    dataField: "barrio",
    text: "Barrio",
  },
  {
    dataField: "ciudad",
    text: "Ciudad",
  },
  {
    dataField: "departamento",
    text: "Departamento",
  },
];

export default class MichidadsBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idMichidad: null,
      message: {
        text: '',
        show: false,
      },
      confirmation: {
        title: 'Eliminar michidad',
        text: '¿Desea eliminar el michidad?',
        show: false,
      },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {}
  onClickEditButton(row) {
    this.props.setIdMichidad(row._id);
    this.props.changeTab('editar');
  }
  onClickDeleteButton(row) {
    this.setState({
      idMichidad: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }
  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }
  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarMichidad()
    );
  }
  eliminarMichidad() {
    this.setState({ loading: true });
    request
      .delete(`/michidads/${this.state.idMichidad}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        this.setState({ loading: false });
        if (response.data.exito) this.reloadPage();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  reloadPage() {
    setTimeout(() => {
        window.location.reload();
    }, 2500);
}

  render() {
    return (
      <Container id='michidads-buscar-container'>
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />
        <Row>
          <h1>Buscar Michidads</h1>
        </Row>
        <Row>
          <DataGrid
            url='/michidads'
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
