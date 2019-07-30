import React from "react";

export const newProdImg = ["Mens", "Womens", "Childrens"].map((value, index) => (
  <img
    key={`${value}${index / 10}newProdImg`}
    src={`/main/${value}.png`}
    alt={`New ${value}`}
    height={"200px"}
    width={"850px"}
  />
));

export const newProdCateg = ["Mens", "Womens", "Childrens"];

