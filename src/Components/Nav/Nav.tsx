import React, { Fragment, memo } from "react";
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

export default memo(Nav);
