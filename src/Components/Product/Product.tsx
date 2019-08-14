import React, { FC, Fragment, useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import objCheckURL from "../../Containers/Class/CheckURL"
import FlipThroList from "../FlipThroList";
import objProcesRequest from "../../Containers/Class/ProcessingRequest";
import { faceProduct } from "../../Type/Interface";

const Product: FC<RouteComponentProps<{ product: string }>> = ({ match }) => {
  const [prod, setProd] = useState<faceProduct>();
  const [resError, setResError] = useState<string>("");
  const [listImg, setListImg] = useState<JSX.Element[]>([]);
  const [listIndx, setListIndx] = useState<number>(0);
  const [colorCateg, setColorCateg] = useState<string>("");
  const [saizCateg, setSaizCateg] = useState<string>("");

  useEffect(() => {
    const [params, url] = [match.params.product, match.url]
    const checkResponseURL = objCheckURL.ProductCheckURL(params, url);
    if (checkResponseURL) {
      (async () => {
        setResError("");
        setProd(undefined);
        const Prod: faceProduct | string = await objProcesRequest.ServerRequest(`${objProcesRequest.headURL}${checkResponseURL}`);
        if (typeof Prod === "object") {
          document.title = `${Prod.title}`;
          setProd(Prod);
          setListImg(
            Prod.src
              .map((value, index) => (
                <img key={`${value}${0.1 + index}`}
                  src={`/${value}`} alt={Prod.title}
                  height={"64px"} width={"64px"}
                  onClick={() => {
                    setListIndx(index);
                    Prod.color.length >= index &&
                      setColorCateg(Prod.color[index]);
                  }} />)));
        } else if (Prod !== "AbortError") {
          setResError(Prod);
        }
      })();
    } else { setResError("404"); }
    return () => {
      objProcesRequest.Abort();
    };
  }, [match]);
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!prod) {
    return <Loding />;
  }

  return (
    <Fragment>
      <div itemScope itemType={"http://schema.org/Product"}>
        <h1 itemProp={"name"}>{prod.title}</h1>
        {listImg.length > 7 ? (
          <FlipThroList yardage={6} arrList={listImg} indxList={listIndx} />
        ) :  listImg.length > 1 && <Fragment>{listImg}</Fragment>}
        <img
          src={`/${prod.src[listIndx]}`}
          alt={prod.title}
          height={"500px"}
          width={"500px"}
          itemProp={"image"}
        />
      </div>
      <Fragment>
        {prod.color.length > 1 ? (
          <select
            value={colorCateg}
            onChange={({ target: { value } }) => {
              setListIndx(prod.color.indexOf(value));
              setColorCateg(value);
            }}
          >
            {prod.color.map((catVal, catInx) => (
              <option key={`${0.2 + catInx}`}>{catVal}</option>
            ))}
          </select>
        ) : (
            <span>{prod.color}</span>
          )}
      </Fragment>
      <Fragment>
        {prod.saiz.length > 1 ? (
          <select
            value={saizCateg}
            onChange={({ target: { value } }) => {
              setSaizCateg(value);
            }}
          >
            {prod.saiz.map((catVal, catInx) => (
              <option key={`${0.3 + catInx}`}>{catVal}</option>
            ))}
          </select>
        ) : (
            <span>{prod.saiz}</span>
          )}
      </Fragment>
      <input size={4} type={"text"} />
      <div itemProp={"offers"} itemScope itemType={"http://schema.org/Offer"}>
        <span itemProp={"price"} {...{ content: `${prod.price}` }}>
          {prod.price}
        </span>
        <meta itemProp="priceCurrency" content="USD" />
      </div>
      <span>{prod.prodState}</span>
      <span>{prod.shipping}</span>
      <span>{prod.sold}</span>
    </Fragment>
  );
};

export default withRouter(Product);
