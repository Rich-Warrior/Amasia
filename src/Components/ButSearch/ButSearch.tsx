import React, { FC, Fragment, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ConveyorProduct from "../ConveyorProduct";
import HandlerErr from "../HandlerErr";
import Loding from "../Loding";
import { faceProduct } from "../../Type/Interface";

const ButSearch: FC<RouteComponentProps<{ PageList: string }>> = ({
  match
}) => {
  const [arrProd, setArrProd] = useState<faceProduct[]>([]);
  const [resError, setResError] = useState<string>("");
  const [page, setPage] = useState({ Page: 0, ListPage: 15, NameSearch: "" });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
      setResError("");
      setArrProd([]);
      const searchParams = new URLSearchParams(match.params.PageList);
      const BoolPage =
        !Number.isNaN(+`${searchParams.get("Page")}`) &&
        !!searchParams.get("Page");
      const BoolListPage =
        !Number.isNaN(+`${searchParams.get("ListPage")}`) &&
        !!searchParams.get("ListPage");
      const NameSrchArr = match.path.split("/");
      if (!BoolPage || !BoolListPage) {
        setResError("Page Not Found 404");
      } else {
        setPage({
          Page: +`${searchParams.get("Page")}`,
          ListPage: +`${searchParams.get("ListPage")}`,
          NameSearch: `Categories ${NameSrchArr[1]}  ${NameSrchArr[2]}`
        });
      }
      try {
        const Res = await fetch(
          `https://foo0022.firebaseio.com${`${match.url.replace(
            `${match.params.PageList}`,
            ""
          )}.json`}`,
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
        NameSearch={page.NameSearch}
        arrConvProd={arrProd}
        ListPage={page.ListPage}
        Page={page.Page}
        Params={`${match.url.replace(`${match.params.PageList}`, "")}`}
      />
    </Fragment>
  );
};

export default withRouter(ButSearch);
