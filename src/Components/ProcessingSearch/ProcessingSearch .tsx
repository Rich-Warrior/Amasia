import React, { FC, Fragment, useState, useCallback } from "react";

import ConveyorProduct from "../ConveyorProduct";
import {
  ProcessingSearchInputMin,
  ProcessingSearchInputMax
} from "./ProcessingSearchObject";
import { faceProduct } from "../../Type/Interface";

const ProcessingSearch: FC<{
  arrRespProduct: faceProduct[];
  ListPage: number;
  Page: number;
  Params: string;
  SearchValue: string;
}> = ({ arrRespProduct = [], ...infoProd }) => {
  const [price, setPrice] = useState({
    minPrice: "",
    maxPrice: ""
  });
  const [sold, setSold] = useState(false);
  const [validInput, setValidInput] = useState({
    validPrice: false,
    formFilled: false
  });
  const [processingProd, setProcessingProd] = useState<faceProduct[]>([]);

  const priceMaxMin = useCallback(e => {
    const { name, value } = e.target;
    setPrice(p => ({ ...p, [name]: value }));
  }, []);
  const soldCheckbox = useCallback(({ target: { checked } }) => {
    setSold(checked);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const isPriceRangeValid =
      !price.minPrice || !price.maxPrice || +price.minPrice <= +price.maxPrice;

    if (isPriceRangeValid) {
      const filteredProducts = arrRespProduct.filter(
        product =>
          (!price.maxPrice || +price.maxPrice >= +product.price) &&
          (!price.minPrice || +price.minPrice <= +product.price)
      );
      if (sold)
        filteredProducts.sort(
          ({ sold: sold1 }, { sold: sold2 }) => +sold2 - +sold1
        );
      setValidInput(v => ({ ...v, formFilled: isPriceRangeValid || sold }));
      setProcessingProd(filteredProducts);
    } else {
      setValidInput({
        validPrice: !isPriceRangeValid,
        formFilled: false
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        {validInput.validPrice && (
          <div>{"Please provide a valid price range"}</div>
        )}
        <span>{"Min"}</span>
        <input
          {...ProcessingSearchInputMin}
          value={price.minPrice}
          onChange={priceMaxMin}
        />
        <span>{"Max"}</span>
        <input
          {...ProcessingSearchInputMax}
          value={price.maxPrice}
          onChange={priceMaxMin}
        />
        <span>{"Sold"}</span>
        <input type="checkbox" checked={sold} onChange={soldCheckbox} />
        <input type="submit" title={"Submit price range"} value={"Go"} />
      </form>
      <ConveyorProduct
        arrConvProd={validInput.formFilled ? processingProd : arrRespProduct}
        {...infoProd}
      />
    </Fragment>
  );
};

export default ProcessingSearch;
