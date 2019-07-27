import React from "react";
import { NavLink } from "react-router-dom";

const exposureUrl = "ListPage=15&Page=1";

const MensLinkArr = ["Hat", "Jacket", "Pant", "Shoe", "Suit", "Shirt"].map(
  category => (
    <NavLink key={`${category}0.1MensLinkArr`} to={`/Mens/${category}/${exposureUrl}`}>
      {category}
    </NavLink>
  )
);

const WomensLinkArr = ["Hat", "Jacket", "Pant", "Shoe", "Suit", "Shirt"].map(
  category => (
    <NavLink key={`${category}0.2WomensLinkArr`} to={`/Womens/${category}/${exposureUrl}`}>
      {category}
    </NavLink>
  )
);

const ChildrensLinkArr = ["Hat", "Jacket", "Pant", "Shoe", "Suit", "Shirt"].map(
  category => (
    <NavLink
      key={`${category}0.3ChildrensLinkArr`}
      to={`/Childrens/${category}/${exposureUrl}`}
    >
      {category}
    </NavLink>
  )
);

export default [...MensLinkArr, ...WomensLinkArr, ...ChildrensLinkArr];
