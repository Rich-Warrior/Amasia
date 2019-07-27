import React, { Fragment } from 'react';

import { NavLink } from 'react-router-dom';
import LogIn from '../LogIn';

const ButtLogSing = () => {
  return (
    <Fragment>
      <LogIn />
      <NavLink to={"/SingUp"}>
        {"Sign Up"}
      </NavLink>
      <NavLink to={"/"}>
        {"Log In"}
      </NavLink>
    </Fragment>
  );
}

export default ButtLogSing;