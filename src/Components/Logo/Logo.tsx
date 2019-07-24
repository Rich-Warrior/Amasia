import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <>
    <NavLink to={"/"}>
      <img
        src={"/Logo/logoAmasia.svg"}
        alt={"Logo Amasia"}
        height={"90px"}
        width={"190px"}
      />
    </NavLink>
  </>
);

export default memo(Logo);
