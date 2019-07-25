import React, { FC } from "react";
import "./Loding.css";

const Loding: FC = () => (
  <div className="cssload-loader">
    <div className="cssload-inner cssload-one" />
    <div className="cssload-inner cssload-two" />
    <div className="cssload-inner cssload-three" />
  </div>
);

export default Loding;
