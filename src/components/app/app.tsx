import React = require("react");
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Stands from '../pages/stands'
import Recipes from '../pages/recipes'
import NotFound from '../pages/error'

const App = () => (
    <Router>
        {/* // TODO: Add Header with nav bar */}
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/stands" component={Stands} />
                <Route exact path="/recipes" component={Recipes} />
                <Route component={NotFound} />
            </Switch>
        </div>
        {/* TODO: Add Footer with general information */}
    </Router>
)

export default App