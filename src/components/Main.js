import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// page components
import Home from './pages/Home';
import PickYourOwn from "./pages/Pick Your Own";
import FarmMarkets from './pages/Farm Markets';
import Recipes from "./pages/Recipes";
import Header from './Header';
import Footer from "./Footer";

// component used for react router, add new page links here
const Main = () => (
  <Router>
    <div id="wrapper">
      <Header />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route path={process.env.PUBLIC_URL + '/PickYourOwn'} component={PickYourOwn} />
        <Route path={process.env.PUBLIC_URL + '/FarmMarkets'} component={FarmMarkets} />
        <Route path={process.env.PUBLIC_URL + '/Recipes'} component={Recipes} />
      </Switch>

      <Footer />
    </div>
  </Router>
);

export default Main;
