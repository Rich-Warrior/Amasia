import React, { FC, Fragment, useState, useMemo } from "react";

const FlipThroList: FC<{
  arrLeng: number;
  arrTeg: JSX.Element[];
  IndxImg: number;
}> = ({ arrLeng, arrTeg, IndxImg }) => {
  const [elemIndx, setElemIndx] = useState<number>(0);
  const [newArrayTeg, setArrayTeg] = useState<JSX.Element[]>([]);
  useMemo(() => {
    const arrStart = Math.floor(IndxImg / arrLeng) * arrLeng;
    if (IndxImg < arrTeg.length) {
      setArrayTeg(
        arrTeg.slice(
          arrStart,
          arrStart + arrLeng
        )
      );
      setElemIndx(arrStart + arrLeng);
    } else {
      setArrayTeg(
        arrTeg.slice(
          arrStart - arrLeng,
          arrStart
        )
      );
      setElemIndx(arrStart - arrLeng);
    }
  }, [arrLeng, arrTeg, IndxImg]);

  const arryForth = () => {
    if (elemIndx < arrTeg.length) {
      setArrayTeg(arrTeg.slice(elemIndx, elemIndx + arrLeng));
      setElemIndx(elemIndx + arrLeng);
    }
  };
  const arryBeck = () => {
    if (elemIndx > arrLeng) {
      setArrayTeg(arrTeg.slice(elemIndx - 2 * arrLeng, elemIndx - arrLeng));
      setElemIndx(elemIndx - arrLeng);
    }
  };

  return (
    <Fragment>
      {arrTeg.length > 1 && (
        <Fragment>
          {arrTeg.length > arrLeng && (
            <Fragment>
              <button onClick={arryForth}>{">"}</button>
              <button onClick={arryBeck}>{"<"}</button>
            </Fragment>
          )}
         <Fragment> {newArrayTeg} </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FlipThroList;
