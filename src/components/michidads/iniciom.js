import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./michidads.css";
import MichidadsBuscar from "./crud/buscar";
import MichidadsCrear from "./crud/crear";
import MichidadsEditar from "./crud/editar";

export default class Michidads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
      _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdMichidad = this.setIdMichidad.bind(this);
    this.getIdMichidad = this.getIdMichidad.bind(this);

  }
  changeTab(tab) {
    this.setState({ currentTab: tab });
  }
  setIdMichidad(id) {
    this.setState({ _id: id });
  }
  getIdMichidad() {
    return this.state._id;
  }
  render() {
    return (
      <Container id="michidads-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? (
            <MichidadsBuscar
              changeTab={this.changeTab}
              setIdMichidad={this.setIdMichidad}
            />
          ) : this.state.currentTab === "crear" ? (
            <MichidadsCrear changeTab={this.changeTab} />
          ) : (
            <MichidadsEditar
              changeTab={this.changeTab}
              getIdMichidad={this.getIdMichidad}
            />
          )}
        </Row>
      </Container>
    );
  }
}
