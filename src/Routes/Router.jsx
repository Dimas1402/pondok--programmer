import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Components/Home/Home';
// import Copyright from '../Components/Copyright/Copyright';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Copyright/> */}
      </Router>
    );
  };
  
  export default Routes;
  