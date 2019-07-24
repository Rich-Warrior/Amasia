import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SingUp from "../SingUp";
import { RouteHead, RouteSchProd } from "./RouteProjComp";
import RouteCollector from "./PathComponCollector";

const RouteProj = () => (
  <>
    <Switch>
      <Route path="/" exact component={RouteHead} />
      {RouteCollector}
      <Route path="/sch/:schProd" component={RouteSchProd} />
      <Route path="/SingUp" component={SingUp} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  </>
);

export default RouteProj;
