import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Inicio, { Index } from '../index/Index';
import PrivateRoute from '../auth/privaterouter';
import productos from '../productos/iniciop';
import michidads from '../michidads/iniciom';
import { NotFound } from '../NotFound/NotFound';


export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={['/productos']} component={productos} />
        <PrivateRoute exact path={['/michidads']} component={michidads} />
        <Route exact path={['/login']} component={Login} />
        <Route exact path={['/', '/index']} component={Index} />
        <Route
          path={'*'}
          component={NotFound}
        />
      </Switch>
    </Router>
  );
}
