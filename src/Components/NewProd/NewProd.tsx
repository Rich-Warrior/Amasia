import React, { FC, Fragment, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import Banner from "../Banner";
import { newProdImg, newProdCateg } from "./NewProdArray";
import useBanner from "../../Containers/useHooks/useBanner";
import { faceProduct } from "../../Type/Interface";
import ProductList from "../ProductList";

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
    const abortController = new AbortController();
    const signal = abortController.signal;
    document.title = `Hat Jacket Pants Shoes Suit | Amasia`;
    (async () => {
      setArrProd([]);
      setResError("");
      try {
        const Res = await fetch(
          `https://doo0022.firebaseio.com/New/${bannArr}.json`,
          {
            signal: signal
          }
        );
        if (!Res.ok) {
          throw new Error("Page Not Found 404");
        }
        const ResObj = await Res.json();
        const ResArr = await Object.values(ResObj).flat();
        await setArrProd(
          ResArr.map((ProdArr: faceProduct, ProdIndex) => (
            <Fragment key={`${ProdIndex / 10 + ProdIndex}`}>
              <ProductList arrListProd={ProdArr} />
            </Fragment>
          ))
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          setResError(error.message);
        }
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [match, bannArr]);

  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <button onClick={bannForth}>{">"}</button>
      <button onClick={bannBeck}>{"<"}</button>
      <Fragment>{newProdImg[bannListIndex - 1]}</Fragment>
      <Banner array={arrProd} yardage={8} />
    </Fragment>
  );
};

export default withRouter(NewProd);
