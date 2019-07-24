import React, { FC, memo } from "react";
import useBanner from "../../Containers/useHooks/useBanner";

const Banner: FC<{ array: JSX.Element[]; yardage: number }> = ({
  array,
  yardage
}) => {
  const { bannForth, bannBeck, bannArr } = useBanner(array, yardage);
  return (
    <>
      <button onClick={bannForth}>{">"}</button>
      <button onClick={bannBeck}>{"<"}</button>
     <ul>{bannArr}</ul> 
    </>
  );
};

export default memo(Banner);
