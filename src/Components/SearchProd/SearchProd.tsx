import React, { FC, Fragment, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import ConveyorProduct from "../ConveyorProduct/ConveyorProduct";
import NotFound from "../NotFound";
import objCheckURL from "../../Containers/Class/CheckURL"
import objProcesRequest from "../../Containers/Class/ProcessingRequest";
import { faceProduct } from "../../Type/Interface";

const SearchProd: FC<RouteComponentProps<{ schProd: string }>> = ({ match }) => {
  const [reqSearch, setReqSearch] = useState<faceProduct[]>([]);
  const [nothFound, setNothFound] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");
  const [searchNam, setSearchNam] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, Params: "", SearchValue: "" });

  useEffect(() => {
    const checkResponseURL = objCheckURL.SearchCheckURL(match.params.schProd);
    if (checkResponseURL) {
      (async () => {
        const { Page, ListPage, Params, SearchValue, Categories } = checkResponseURL;
        setResError("");
        setSearchNam("");
        setReqSearch([]);
        setNothFound(false);
        const Prod: faceProduct[] | string = await objProcesRequest.SearchProdRequest(`${objProcesRequest.headURL}/${Categories}`, Categories, SearchValue);
        if (Array.isArray(Prod) && Prod.length) {
          document.title = `${SearchValue} | Amasia`;
          setPage({ Page, ListPage, Params, SearchValue: `Searchn ${SearchValue}` });
          setReqSearch(Prod);
        } else if (Prod !== "AbortError" && !Array.isArray(Prod)) {
          setResError(Prod);
        } else { setNothFound(true); setSearchNam(SearchValue); }

      })();
    } else { setResError("Page Not Found 404"); }
    return () => { objProcesRequest.Abort(); };
  }, [match]);

  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (nothFound) {
    return <NotFound prodName={searchNam} />;
  } else if (!reqSearch.length && !nothFound) {
    return <Loding />;
  }

  return (
    <Fragment>
      <ConveyorProduct
        arrConvProd={reqSearch}
        {...page}
      />
    </Fragment>
  );
};

export default withRouter(SearchProd);
