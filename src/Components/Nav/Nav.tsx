import React, { memo } from "react";
import MensWomensChildrensLink from "./NavArray";

const Nav = () => {
  return (
    <>
      <nav>{MensWomensChildrensLink}</nav>
    </>
  );
};

export default memo(Nav);
