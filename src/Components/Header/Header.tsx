import React, { memo } from "react";
import Nav from "../Nav";
import Logo from "../Logo";
import FormSearch from "../FormSearch";
import ButtLogSing from "../ButtLogSing/ButtLogSing";

const Header = () => (
  <>
    <header>
      <Logo />
      <Nav />
      <FormSearch />
      <ButtLogSing />
    </header>
  </>
);

export default memo(Header);
