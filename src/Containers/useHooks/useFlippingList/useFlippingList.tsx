import { useState, useEffect } from "react";

const useFlippingList = ({ yardage, arrList, indxList }: {
    yardage: number;
    arrList: JSX.Element[];
    indxList: number;
}) => {
    const [flippingListIndx, setFlippingListIndx] = useState<number>(0);
    const [flippingList, setFlippingList] = useState<JSX.Element[]>([]);

    useEffect(() => {        ///???????
        const arrStart = Math.floor(indxList / yardage) * yardage;
        if (indxList < arrList.length) {
            setFlippingList(
                arrList.slice(
                    arrStart,
                    arrStart + yardage
                )
            );
            setFlippingListIndx(arrStart + yardage);
        } else {
            setFlippingList(
                arrList.slice(
                    arrStart - yardage,
                    arrStart
                )
            );
            setFlippingListIndx(arrStart - yardage);
        }
    }, [arrList, yardage, indxList])


    const FlippingListForth = () => {
        if (flippingListIndx < arrList.length) {
            setFlippingList(arrList.slice(flippingListIndx, flippingListIndx + yardage));
            setFlippingListIndx(flippingListIndx + yardage);
        }
    };
    const FlippingListBeck = () => {
        if (flippingListIndx > yardage) {
            setFlippingList(arrList.slice(flippingListIndx - 2 * yardage, flippingListIndx - yardage));
            setFlippingListIndx(flippingListIndx - yardage);
        }
    };

    return {
        flippingList,
        FlippingListForth,
        FlippingListBeck
    };
};

export default useFlippingList;