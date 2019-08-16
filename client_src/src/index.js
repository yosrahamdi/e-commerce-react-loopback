import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import Pages from './containers/Pages.jsx';
import AdminLayout from "./layouts/Admin.jsx";
import Ph from './containers/phones';
import App from './App';
import {ProductProvider} from './Context';
import * as serviceWorker from "./serviceWorker";
import { resolveTypeReferenceDirective } from "typescript";


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
  {...rest}
  render={props => {
    return isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect 
        to={{
          pathname: "/Login",
          //state: { from: props.location}
        }}
        />
    )
  }

  }
  />
)

function isAuthenticated(){
  const jwt = localStorage.getItem(  'jwt');
  if ( jwt) {
    return true;
  }
  return false 
;}

ReactDOM.render(
  <div>
  
  <BrowserRouter>
      <Switch>
        {/* privateroute */}
      <PrivateRoute path="/admin" component={AdminLayout} />
      <Route name="Login" path="/Login" component={Pages} />
      <Route path="/ph" component={Ph} />
      <Route path="/" component={App} />
    </Switch>  

  </BrowserRouter>
  </div>
  ,
  document.getElementById("root")
);
