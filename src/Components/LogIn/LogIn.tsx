import React, { memo } from "react";

const LogIn = () => (
  <>
    <input type="text" placeholder="Last Name*" />
    <input type="password" placeholder="Password*" />
  </>
);

export default memo(LogIn);
