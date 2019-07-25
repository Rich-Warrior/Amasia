import React, { FC } from "react";

const NotFound: FC<{ prodName: string }> = ({ prodName }) => (
  <div>{`roduct name ${prodName} not found`}</div>
);

export default NotFound;
