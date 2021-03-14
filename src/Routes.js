import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoutes path="/dashboard" exact component={UserDashboard} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
