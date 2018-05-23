import React from 'react';
import { Switch, Route } from 'react-router-dom';

// page components
import Home from './pages/Home/home';
import PickYourOwn from './pages/pick_your_own';
import FarmMarkets from './pages/farm_markets';
import Directions from './pages/directions';
import Recipes from './pages/recipes';

// component used for react router, add new page links here
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/pick_your_own' component={PickYourOwn} />
      <Route path='/farm_markets' component={FarmMarkets} />
      <Route path='/directions' component={Directions} />
      <Route path='/recipes' component={Recipes} />
    </Switch>
  </main>
)

export default Main