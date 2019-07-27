import React, { FC, Fragment } from "react";
import useFlippingList from "../../Containers/useHooks/useFlippingList";

const FlipThroList: FC<{
  yardage: number;
  arrList: JSX.Element[];
  indxList: number;
}> = ({ yardage, arrList, indxList }) => {
  const {
    flippingList,
    FlippingListForth,
    FlippingListBeck } = useFlippingList({ yardage, arrList, indxList })

  return (
    <Fragment>
      {arrList.length > 1 && (
        <Fragment>
          {arrList.length > yardage && (
            <Fragment>
              <button onClick={FlippingListForth}>{">"}</button>
              <button onClick={FlippingListBeck}>{"<"}</button>
            </Fragment>
          )}
          <Fragment> {flippingList} </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FlipThroList;
