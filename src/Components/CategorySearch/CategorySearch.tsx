import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import ProcessingSearch from "../ProcessingSearch";
import HandlerErr from "../HandlerErr";
import Loading from "../Loading";
import objCheckURL from "../../Containers/Class/CheckURL";
import objProcesRequest from "../../Containers/Class/ProcessingRequest";
import { faceProduct } from "../../Type/Interface";


const CategorySearch: FC<RouteComponentProps<{ PageList: string }>> = ({
  match
}) => {
  const [arrProd, setArrProd] = useState<faceProduct[]>([]);
  const [resError, setResError] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, SearchValue: "", Params: "" });

  useEffect(() => {
    const [params, path, url] = [match.params.PageList, match.path, match.url];
    const checkResponseURL = objCheckURL.CategoryCheckURL(params, path, url);
    if (checkResponseURL) {
      (async () => {
        const { Page, ListPage, SearchValue, Categories } = checkResponseURL;
        setResError("");
        setArrProd([]);
        const Prod: faceProduct[] | string = await objProcesRequest.ServerRequest(`${objProcesRequest.headURL}${Categories}`);
        if (Array.isArray(Prod)) {
          document.title = SearchValue;
          setPage({ Page, ListPage, SearchValue: `Categories ${SearchValue}`, Params: Categories });
          setArrProd(Prod);
        } else if (Prod !== "AbortError") {
          setResError(Prod);
        }
      })();
    } else { setResError("404"); }
    return () => { objProcesRequest.Abort(); }

  }, [match]);
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loading />;
  }

  return (
    <>
      <ProcessingSearch
        arrRespProduct={arrProd}
        {...page}
      />
    </>
  );
};

export default withRouter(CategorySearch);
