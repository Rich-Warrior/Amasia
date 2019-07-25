import { useState, useMemo } from "react";

const useBanner = (array: JSX.Element[] | string[], yardage: number) => {
  const [bannArr, setBannArr] = useState<JSX.Element[] | string[]>([]);
  const [bannListIndex, setBannIndex] = useState<number>(1);

  const lengthDelAdd = yardage * bannListIndex;

  useMemo(() => {
    setBannArr(array.slice(0, yardage));
    setBannIndex(1);
  }, [array, yardage]);

  const bannResetValue = () => {
    setBannArr(array.slice(0, yardage));
    setBannIndex(1);
  };

  const bannForth = () => {
    if (lengthDelAdd <= array.length - 1) {
      setBannArr(array.slice(lengthDelAdd, lengthDelAdd + yardage));
      setBannIndex(bannListIndex + 1);
    } else if (Math.ceil(array.length / yardage) > bannListIndex) {
      setBannArr(array.slice(lengthDelAdd - array.length, array.length));
      setBannIndex(bannListIndex + 1);
    } else {
      setBannArr(array.slice(0, yardage));
      setBannIndex(1);
    }
  };
  const bannBeck = () => {
    if (bannListIndex > 1) {
      setBannArr(
        array.slice(lengthDelAdd - 2 * yardage, lengthDelAdd - yardage)
      );
      setBannIndex(bannListIndex - 1);
    } else if (array.length % yardage) {
      setBannArr(
        array.slice(array.length - (array.length % yardage), array.length)
      );
      setBannIndex(Math.ceil(array.length / yardage));
    } else {
      setBannArr(array.slice(array.length - yardage, array.length));
      setBannIndex(array.length / yardage);
    }
  };

  return {
    bannForth,
    bannBeck,
    bannResetValue,
    bannArr,
    bannListIndex
  };
};
export default useBanner;
