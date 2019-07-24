import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <>
    <NavLink to={"/"}>{"Admin"}</NavLink>
    <NavLink to={"/"}>{"About Us"}</NavLink>
  </>
);

export default Footer;
