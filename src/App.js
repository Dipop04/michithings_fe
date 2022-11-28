//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
//import { Login } from './components/login/login'
import AppRouter from './components/router/router';
import { Index } from './components/index/Index';



function App() {
  return (
    <div className="App">
      <Index />
      {/* <Container>
        <AppRouter />
      </Container> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;



