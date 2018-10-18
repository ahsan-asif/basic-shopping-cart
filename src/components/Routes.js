import React, { Component } from "react";
import MainLayout from "./MainLayout";
import Card from "./Card";
import ProductDisplay from "./ProductDisplay";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/products" component={ProductDisplay} />
            <Route exact path="/products/cart" component={Card} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default Routes;
