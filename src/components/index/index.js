import React from 'react';
import "./../../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./Banner"
import { Equipo } from '../equipo/equipo';
import { Contacto } from '../contacto/contacto';
import { Footer } from '../footer/footer';
import Login from '../login/login';



export const Index = () => {
  return (
    <>
        {/* <Menu /> */}
        <Banner />
        <Equipo />
        <Contacto />
        <Login />
        <Footer />
    </>
  )
}