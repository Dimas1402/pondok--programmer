import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
// import Copyright from '../Components/Copyright/Copyright';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
        {/* <Copyright/> */}
      </Router>
    );
  };
  
  export default Routes;
  