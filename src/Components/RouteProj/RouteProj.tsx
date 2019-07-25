import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "../Admin";
import SingUp from "../SingUp";
import {
  RouteHead,
  RouteSchProd,
} from "./RouteProjComp";
import ArrRoute from "./PathComponCollector";

const RouteProj = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={RouteHead}/>
      <Fragment>{ArrRoute}</Fragment>
      <Route path="/sch/:schProd" component={RouteSchProd}/>
      <Route path="/Admin" component={Admin} />
      <Route path="/SingUp" component={SingUp} />
      <Route path="*" render={() => <Redirect to="/"/>} />
    </Switch>
  </Fragment>
);

export default RouteProj;
