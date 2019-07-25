import React from "react";
import { Route } from "react-router-dom";
import {
  ArrPathProduct,
  ArrPathPageList
} from "./RouteProjArray";
import {
  RouteProduct,
  RouteCategProduct,
} from "./RouteProjComp";

 const ArrRouteProduct =<Route key={"ArrRouteProduct"} path={ArrPathProduct} component={RouteProduct}/>; 
 const ArrRoutePageList =<Route key={"ArrRoutePageList"} path={ArrPathPageList} component={RouteCategProduct}/>;  

export default [ArrRouteProduct,ArrRoutePageList];