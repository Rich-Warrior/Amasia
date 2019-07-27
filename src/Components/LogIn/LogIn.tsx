import React, { Fragment, memo } from "react";

const LogIn = () => (
  <Fragment>
    <input type="text" placeholder="Last Name*" />
    <input type="password" placeholder="Password*" />
  </Fragment>
);

export default memo(LogIn);
