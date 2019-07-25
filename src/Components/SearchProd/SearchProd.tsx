import React, { FC, Fragment, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { faceProduct } from "../../Type/Interface";
import ConveyorProduct from "../ConveyorProduct/ConveyorProduct";
import NotFound from "../NotFound";

const SearchProd: FC<RouteComponentProps<{ schProd: string }>> = ({ match }) => {
  const [reqSearch, setReqSearch] = useState<faceProduct[]>([]);
  const [nothFound, setNothFound] = useState<boolean>(false);
  const [resError, setResError] = useState<string>("");
  const [searchNam, setSearchNam] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, Params:"",NameSearch: "" });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
       setResError("");
       setSearchNam("");
       setReqSearch([]);
       setNothFound(false);
      try {
        const searchParams = await new URLSearchParams(match.params.schProd);
        const BoolPage = await (!Number.isNaN(+`${searchParams.get("Page")}`) &&
          !!searchParams.get("Page"));
        const BoolListPage = await (!Number.isNaN(
          +`${searchParams.get("ListPage")}`
        ) && !!searchParams.get("ListPage"));

        if (
          !searchParams.get("Categories") ||
          !searchParams.get("Search") ||
          !BoolPage ||
          !BoolListPage
        ) {
          throw new Error("Page Not Found 404");
        } else {
          setPage({
            Page: +`${searchParams.get("Page")}`,
            ListPage: +`${searchParams.get("ListPage")}`,
            Params:`/sch/${match.params.schProd.split("&", 2).map(e => e + "&").join("")}`,
            NameSearch:`Search ${searchParams.get("Search")}`
          });
        }
        const Categories =
        await ( searchParams.get("Categories")) !== "All" &&
          searchParams.get("Categories")
            ? `${searchParams.get("Categories")}.json`
            : ".json";
        const Search = await `${searchParams.get("Search")}`;
        
        const Res = await fetch(`https://foo0022.firebaseio.com/${Categories}`,{ signal: signal });
        const ResObj:Object | null = await Res.json(); //?
        if (!Res.ok || !ResObj) { 
          throw new Error("Page Not Found 404");
        } 
        document.title=`${Search} | Amasia`;
        const ResArr = await ( Categories === ".json")?Object.values(ResObj)
            .map(v => Object.values(v).flat())
            .flat()
            .filter(({ title }) => title.includes(Search))
       :
          Object.values(ResObj)
            .flat()
            .filter(({ title }) => title.includes(Search));
        if (!!ResArr.length) {
          setReqSearch(ResArr);
        } else {
          setNothFound(!ResArr.length);
          setSearchNam(Search);
        }
      } catch (error) {
        if(error.name !== "AbortError") {setResError(error.message);}
      }
    })();
    return () =>{ abortController.abort();};
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
        ListPage={page.ListPage}
        {...page}
      />
    </Fragment>
  );
};

export default withRouter(SearchProd);
