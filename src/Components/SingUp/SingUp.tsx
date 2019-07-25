import React from "react";
import { NavLink } from "react-router-dom";

const SingUp = () => (
  <div>
    <div>
      <p>Sign Up for Free</p>
    </div>
    <div>
      <form id="form">
        <input type="text" placeholder="First Name*" />
        <input type="text" placeholder="Last Name*" />
        <input
          type="email"
          placeholder="Email Address*"
        />
        <input type="password" placeholder="Set A Password*" />
        <NavLink to={"/"}>
          <span>GET STARTED</span>
        </NavLink>
      </form>
    </div>
  </div>
);

export default SingUp;
