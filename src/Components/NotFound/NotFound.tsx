import React,{memo} from "react";

const NotFound = ({ prodName }:{ prodName: string }) => (
  <div>{`roduct name ${prodName} not found`}</div>
);

export default memo(NotFound);
