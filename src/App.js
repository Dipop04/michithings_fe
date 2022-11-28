//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/index/index2';


import { Menu } from './components/navbar/navbar';
import {Container} from 'react-bootstrap';
import AppRouter from './components/router/router';



function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      {/* <Login /> */}
      <Container>
      <AppRouter />
    </Container>
    </div>
  );
}

export default App;



