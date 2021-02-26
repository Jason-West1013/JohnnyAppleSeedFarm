import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/pages/about'
import NotFound from './components/pages/error'
import Footer from './components/shared/footer'
import Header from './components/shared/header'
import Home from './components/pages/home'
import Recipes from './components/pages/recipes'
import Stands from './components/pages/stands'

function App() {
  return (	
    <Router>
		  <div>
			  <Header />
			  <Switch>
				  <Route exact path="/" component={Home} />
				  <Route exact path="/about" component={About} />
				  <Route exact path="/stands" component={Stands} />
				  <Route exact path="/recipes" component={Recipes} />
				  <Route component={NotFound} />
			  </Switch>
		  </div>
		  <Footer />
	  </Router>
  );

}

export default App;
