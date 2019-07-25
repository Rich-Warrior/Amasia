import React, { FC, Fragment, useState, useMemo } from "react";

import { DupTeg } from "../../Containers/DupComp/DupTeg/DupTeg";

import { faceTegWithoutText } from "../../Type/Interface";

const FlipThroList: FC<{
  arrLeng: number;
  arrTeg: faceTegWithoutText[];
  IndxImg: number;
}> = ({ arrLeng, arrTeg, IndxImg }) => {
  const [elemIndx, setElemIndx] = useState<number>(0);
  const [newArrayTeg, setArrayTeg] = useState<faceTegWithoutText[]>([]);
  useMemo(() => {
    if (IndxImg < arrTeg.length) {
      setArrayTeg(
        arrTeg.slice(
          Math.floor(IndxImg / arrLeng) * arrLeng,
          Math.floor(IndxImg / arrLeng) * arrLeng + arrLeng
        )
      );
      setElemIndx(Math.floor(IndxImg / arrLeng) * arrLeng + arrLeng);
    } else {
      setArrayTeg(
        arrTeg.slice(
          Math.floor(IndxImg / arrLeng) * arrLeng - arrLeng,
          Math.floor(IndxImg / arrLeng) * arrLeng
        )
      );
      setElemIndx(Math.floor(IndxImg / arrLeng) * arrLeng - arrLeng);
    }
  }, [arrLeng,arrTeg,IndxImg]);

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
          <DupTeg array={newArrayTeg} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default FlipThroList;
