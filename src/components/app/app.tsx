import React = require('react')
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from '../pages/about'
import NotFound from '../pages/error'
import Footer from '../shared/footer'
import Header from '../shared/header'
import Home from '../pages/home'
import Recipes from '../pages/recipes'
import Stands from '../pages/stands'

const App = () => (
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
)

export default App
