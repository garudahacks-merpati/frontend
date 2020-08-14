import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Resource from "./pages/Resource";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/forgetpassword" component={ForgetPassword}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/resource" component={Resource}></Route>
      </Switch>
    </Router>
  );
}

export default App;
