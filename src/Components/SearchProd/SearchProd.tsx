import React, { FC, Fragment, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import ConveyorProduct from "../ConveyorProduct/ConveyorProduct";
import NotFound from "../NotFound";
import objCheckURL from "../../Containers/Class/CheckURL"
import { faceProduct, faceResponse, faceCategoriesList } from "../../Type/Interface";

const SearchProd: FC<RouteComponentProps<{ schProd: string }>> = ({ match }) => {
  const [reqSearch, setReqSearch] = useState<faceProduct[]>([]);
  const [nothFound, setNothFound] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");
  const [searchNam, setSearchNam] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, Params: "", SearchValue: "" });
  
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const checkResponseURL = objCheckURL.SearchCheckURL(match.params.schProd);
    if (typeof (checkResponseURL) !== "boolean") {
      (async () => {
        const { Page, ListPage, Params, SearchValue, Categories } = checkResponseURL;
        setResError("");
        setSearchNam("");
        setReqSearch([]);
        setNothFound(false);
        try {
          const Res = await fetch(`https://foo0022.firebaseio.com/${Categories}`, { signal: signal });
          const ResObj: faceResponse | faceCategoriesList | null = await Res.json();
          if (!Res.ok || !ResObj) {
            throw new Error("Page Not Found 404");
          }
          document.title = `${SearchValue} | Amasia`;
          setPage({ Page, ListPage, Params, SearchValue: `Searchn ${SearchValue}` });
          const ResArr = await (Categories === ".json") ? Object.values(ResObj)
            .map(v => Object.values(v).flat())
            .flat()
            .filter(({ title }) => title.includes(SearchValue))
            :
            Object.values(ResObj)
              .flat()
              .filter(({ title }) => title.includes(SearchValue));
          if (!!ResArr.length) {
            setReqSearch(ResArr);
          } else {
            setNothFound(!ResArr.length);
            setSearchNam(SearchValue);
          }
        } catch (error) {
          if (error.name !== "AbortError") { setResError(error.message); }
        }
      })();
    }
    return () => { abortController.abort(); };
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
