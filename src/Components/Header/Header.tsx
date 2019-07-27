import React, { Fragment, memo } from "react";
import Nav from "../Nav";
import Logo from "../Logo";
import FormSearch from "../FormSearch";
import ButtLogSing from "../ButtLogSing/ButtLogSing";

const Header = () => (
    <Fragment>
        <header>
            <Logo />
            <Nav />
            <FormSearch />
            <ButtLogSing />
        </header>
    </Fragment>
);

export default memo(Header);