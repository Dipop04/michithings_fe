import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Inicio from '../index/Index';
import PrivateRoute from '../auth/privaterouter';
import productos from '../productos/iniciop';
import michidads from '../michidads/iniciom';
import { NotFound } from '../NotFound/NotFound';
import { Equipo } from '../equipo/equipo';
import { Contacto } from '../contacto/contacto';


export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={['/productos']} component={productos} />
        <PrivateRoute exact path={['/michidads']} component={michidads} />
        <Route exact path={['/login']} component={Login} />
        <Route exact path={['/equipo']} component={Equipo} />
        <Route exact path={['/contacto']} component={Contacto} />
        <Route exact path={['/', '/index']} component={Login} />
        <Route
          path={'*'}
          component={NotFound}
        />
      </Switch>
    </Router>
  );
}
