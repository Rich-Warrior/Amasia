import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loading from "../Loading";
import Banner from "../Banner";
import { newProdImg, newProdCateg } from "./NewProdArray";
import useBanner from "../../Containers/useHooks/useBanner";
import ProductList from "../ProductList";
import objProcesRequest from "../../Containers/Class/ProcessingRequest";
import { faceProduct } from "../../Type/Interface";

const NewProd: FC<RouteComponentProps<{}>> = ({ match }) => {
  const [arrProd, setArrProd] = useState<JSX.Element[]>([]);
  const [resError, setResError] = useState<string>("");
  const {
    bannForth,
    bannBeck,
    bannResetValue,
    bannArr,
    bannListIndex
  } = useBanner(newProdCateg, 1);

  useEffect(bannResetValue, [match]);
  useEffect(() => {
    (async () => {
      setArrProd([]);
      setResError("");
      const Prod: faceProduct[] | string = await objProcesRequest.ServerRequest(
        `${objProcesRequest.newURL}/New/${bannArr[0]}.json`
      );
      if (Array.isArray(Prod)) {
        document.title = `Hat Jacket Pants Shoes Suit | Amasia`;
        setArrProd(
          Prod.map((ProdArr: faceProduct, ProdIndex) => (
            <li key={`${ProdIndex / 10 + ProdIndex}`}>
              <ProductList arrListProd={ProdArr} />
            </li>
          ))
        );
      } else if (Prod !== "AbortError") {
        setResError(Prod);
      }
    })();
    return () => {
      objProcesRequest.Abort();
    };
  }, [match, bannArr]);

  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loading />;
  }

  return (
    <>
      <button onClick={bannForth}>{">"}</button>
      <button onClick={bannBeck}>{"<"}</button>
      {newProdImg[bannListIndex - 1]}
      <Banner array={arrProd} yardage={8} />
    </>
  );
};

export default withRouter(NewProd);
