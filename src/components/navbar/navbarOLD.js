import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCat} from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class Menu2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Logout(){
    cookies.remove('_s');
    window.location.reload();
  }
  render() {
    return (
      <Navbar fixed="top" className="bg-navbar" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MICHITHINGS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <DropdownButton id="dropdown-basic-button" title="usuario" variant="info">
                <Dropdown.Header id="dropdown-header">
                  <Row>
                  <FontAwesomeIcon icon={faCat}/>
                  </Row>
                  <Row className="icon">
                    BIENVENIDO
                  </Row>
                </Dropdown.Header>
                <Dropdown.Divider/>
              <Dropdown.Item id="logo" onClick={() => this.Logout()}>Cerrar sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
