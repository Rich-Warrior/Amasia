import React, { Fragment } from "react";
import MensWomensChildrensLink from "./NavArray";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <Fragment>{MensWomensChildrensLink}</Fragment>
      </nav>
    </Fragment>
  );
};

export default Nav;
