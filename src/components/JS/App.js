import React from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import protfolio from "./Portfolio";
import Aboutus from "./About";
import Contactus from './Contact'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/portfolio" component={protfolio}/>
          <Route  path="/about" component={Aboutus}/>
          <Route  path="/contact" component={Contactus}/>
        </Switch>
    </Router>
  );
}
  
export default App;
