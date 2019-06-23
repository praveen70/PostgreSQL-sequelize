import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from './RouteComponent'
import Login from './RouteComponent'
import PrivateRoute from './PrivateRoute';
import More from '../src/components/more'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>

          <Route path="/" exact component={Landingpage} />
          {/* <Route path="/Login/" component={Login} /> */}
          <PrivateRoute  path="/Login" component={Login} />
          <Route path="/more/" component={More} /> 
        </Switch>
    </Router>
  );
}

export default App;
