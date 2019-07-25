import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "../Admin";
import SingUp from "../SingUp";
import {
  RouteHead,
  RouteSchProd,
  RouteProduct,
  RouteCategProduct,
} from "./RouteProjComp";
import {
  ArrPathProduct,
  ArrPathPageList
} from "./RouteProjArray";


const RouteProj = () => (
  <Fragment>
    <Switch>
      <Route path="/" exact component={RouteHead}/>
      <Route path={ArrPathProduct} component={RouteProduct}/>; 
      <Route path={ArrPathPageList} component={RouteCategProduct}/>; 
      <Route path="/sch/:schProd" component={RouteSchProd}/>
      <Route path="/Admin" component={Admin} />
      <Route path="/SingUp" component={SingUp} />
      <Route path="*" render={() => <Redirect to="/"/>} />
    </Switch>
  </Fragment>
);

export default RouteProj;
