import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ManageProductsContainer from '../ManageProducts/ManageProductsContainer';
import ManageShoplistContainer from '../ManageShoplist/ManageShoplistContainer';
import './Content.scss';

const Content = () => (
  <div className="Content">
    <Switch>
      <Route exact path="/" />
      <Route exact path="/list" component={ManageShoplistContainer} />
      <Route exact path="/products" component={ManageProductsContainer} />
    </Switch>
  </div>
);

export default Content;
