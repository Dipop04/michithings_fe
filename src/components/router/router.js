import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Inicio from '../index/index';
import PrivateRoute from '../auth/privaterouter';
import productos from '../productos/iniciop';
import michidads from '../michidads/iniciom';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={['/productos']} component={productos} />
        <PrivateRoute exact path={['/michidads']} component={michidads} />
        <Route exact path={['/login']} component={Login} />
        <Route exact path={['/', '/index']} component={Inicio} />
        <Route
          path={'*'}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
