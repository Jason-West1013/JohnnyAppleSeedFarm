import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Route exact path="/" component={Home} />
      <Route path="/PickYourOwn" component={PickYourOwn} />
      <Route path="/FarmMarkets" component={FarmMarkets} />
      <Route path="/Recipes" component={Recipes} />
      <Footer />
    </div>
  </Router>
);

export default Main;
