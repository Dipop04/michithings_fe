import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../login/login';
import Inicio from '../index/index';
import PrivateRoute from '../auth/privaterouter';
import productos from '../productos/iniciop';
import michidads from '../michidads/iniciom';
import { Image } from 'react-bootstrap';
import { NotFound } from '../NotFound/NotFound';


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
          component={NotFound}
        />
         {/* <Route
          path={'*'}
          component={() => (
            <>
            <img src='../../assets/pagina-error-404-gato.png' />
            </>
          )}
        /> */}
      </Switch>
    </Router>
  );
}
