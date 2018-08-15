import React from "react";
import { Switch, Route } from "react-router-dom";

// page components
import Home from "./pages/Home/home";
import PickYourOwn from "./pages/Pick Your Own/PickYourOwn";
import FarmMarkets from "./pages/Farm Markets/FarmMarkets";
import Directions from "./pages/directions";
import Recipes from "./pages/recipes";

// component used for react router, add new page links here
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/PickYourOwn" component={PickYourOwn} />
      <Route path="/FarmMarkets" component={FarmMarkets} />
      <Route path="/directions" component={Directions} />
      <Route path="/recipes" component={Recipes} />
    </Switch>
  </main>
);

export default Main;
