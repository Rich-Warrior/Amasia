import React, { FC, Fragment, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ConveyorProduct from "../ConveyorProduct";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import objCheckURL from "../../Containers/Class/CheckURL"
import { faceProduct } from "../../Type/Interface";

const CategorySearch: FC<RouteComponentProps<{ PageList: string }>> = ({
  match
}) => {
  const [arrProd, setArrProd] = useState<faceProduct[]>([]);
  const [resError, setResError] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, SearchValue: "", Params: "" });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const [PageList, path, url] = [match.params.PageList, match.path, match.url];
    (async () => {
      setResError("");
      setArrProd([]);
      try {
      const checkResponseURL = await objCheckURL.CategoryCheckURL(PageList, path, url);
      if (typeof (checkResponseURL) === "boolean") { throw new Error("Page Not Found 404"); }
      const { Page, ListPage, SearchValue, Categories } = await checkResponseURL;
      console.log(Categories);
      setPage({ Page, ListPage, SearchValue, Params: Categories });
        const Res = await fetch(
          `https://foo0022.firebaseio.com${Categories}`,
          { signal: signal }
        );
        const ResObj = await Res.json();
        if (!Res.ok || !ResObj) {
          throw new Error("Page Not Found 404");
        }
        const TitleNam = match.path.split("/");
        document.title = `${TitleNam[1]}   ${TitleNam[2]}`;
        const ResArr = await Object.values(ResObj).flat();
        await setArrProd(ResArr);
      } catch (error) {
        if (error.name !== "AbortError") {
          setResError(error.message);
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [match]);
  if (resError !== "") {
    return <HandlerErr error={resError} />;
  } else if (!arrProd.length) {
    return <Loding />;
  }

  return (
    <Fragment>
      <ConveyorProduct
        arrConvProd={arrProd}
        {...page}
      />
    </Fragment>
  );
};

export default withRouter(CategorySearch);
