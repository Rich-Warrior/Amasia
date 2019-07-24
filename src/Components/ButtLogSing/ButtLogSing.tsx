import React from "react";

import { NavLink } from "react-router-dom";
import LogIn from "../LogIn";

const ButtLogSing = () => {
  return (
    <>
      <LogIn />
      <NavLink to={"/SingUp"}>{"Sign Up"}</NavLink>
      <NavLink to={"/"}>{"Log In"}</NavLink>
    </>
  );
};

export default ButtLogSing;
