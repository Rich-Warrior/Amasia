import React, { FC } from "react";
import useFlippingList from "../../Containers/useHooks/useFlippingList";

const FlipThroList: FC<{
  yardage: number;
  arrList: JSX.Element[];
  indxList: number;
}> = ({ yardage, arrList, indxList }) => {
  const { flippingList, FlippingListForth, FlippingListBeck } = useFlippingList(
    { yardage, arrList, indxList }
  );

  return (
    <>
      {arrList.length > 1 && (
        <>
          {arrList.length > yardage && (
            <>
              <button onClick={FlippingListForth}>{">"}</button>
              <button onClick={FlippingListBeck}>{"<"}</button>
            </>
          )}
          <ul>{flippingList}</ul>
        </>
      )}
    </>
  );
};

export default FlipThroList;
