//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/index/index2';
import { Equipo } from './components/equipo/equipo';
import { Contacto } from './components/contacto/contacto';
import { Menu } from './components/navbar/navbar';
import { Container } from 'react-bootstrap';
//import { Login } from './components/login/login'
import AppRouter from './components/router/router';



function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Equipo />
      <Contacto />
      <Container>
        <AppRouter />
      </Container>
      {/* <Login /> */}
    </div>
  );
}

export default App;



