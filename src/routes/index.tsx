import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
    </Switch>
  );
};

export default Routes;
