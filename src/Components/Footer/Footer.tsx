import React,{Fragment} from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <Fragment>
      <NavLink to={"/Admin"}>{"Admin Information"}</NavLink>
    </Fragment>
);

export default Footer;