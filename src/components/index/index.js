import React from 'react';
import { Contacto } from '../contacto/contacto';
import { Equipo } from '../equipo/equipo';
import Login from '../login/login';
import { Menu } from "../navbar/navbar"
import { Banner } from "./Banner"
export const Index = () => {
  return (
    <>
        <Menu />
        <Banner />
        <Equipo />
        <Contacto />
        <Login />
    </>
  )
}