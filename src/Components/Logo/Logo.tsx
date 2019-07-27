import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
    <Fragment>
        <NavLink to={"/"}>
        <img src={"/Logo/logoAmasia.svg"} alt={"Logo Amasia"} height={"90px"} width={"190px"} />
        </NavLink>
    </Fragment>
);

export default memo(Logo);