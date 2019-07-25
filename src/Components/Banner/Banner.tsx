import React, { FC, Fragment } from "react";
import useBanner from "../../Containers/useHooks/useBanner";

const Banner: FC<{ array: JSX.Element[]; yardage: number }> = ({
  array,
  yardage
}) => {
  const { bannForth, bannBeck, bannArr } = useBanner(array, yardage);
  return (
    <Fragment>
      <button onClick={bannForth}>{">"}</button>
      <button onClick={bannBeck}>{"<"}</button>
      <Fragment>{bannArr}</Fragment>
    </Fragment>
  );
};

export default Banner;
