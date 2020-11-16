import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Simulacao from '../pages/Main/Simulacao';
import Favoritos from '../pages/Main/Favoritos';
import Menu from '../pages/Main/Menu';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Registrar from '../pages/Registrar';

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route path="/login" component={Login} exact={true} />
      <Route path="/registrar" component={Registrar} exact={true} />
      <Route path="/main" component={Main} />
      <Route path="/" component={Login} exact={true} />
    </>
  );
};

export const TabRoutes: React.FC = () => {
  return (
    <>
      <Route path="/main/simulacao" component={Simulacao} exact={true} />
      <Route path="/main/favoritos" component={Favoritos} exact={true} />
      <Route path="/main/menu" component={Menu} />
      <Route path="/main" render={() => <Redirect to="/main/simulacao" />} exact={true} />
    </>
  );
};

export default TabRoutes;
