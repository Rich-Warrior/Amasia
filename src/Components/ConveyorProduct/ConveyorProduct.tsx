import React, {
  FC,
  Fragment,
  useEffect,
  useCallback,
  useState
} from "react";
import ProductList from "../ProductList";
import { faceProduct } from "../../Type/Interface";
import { NavLink } from "react-router-dom";

const ConveyorProduct: FC<{
  arrConvProd: faceProduct[];
  ListPage: number;
  Page: number;
  Params: string;
  NameSearch: string;
}> = ({
  arrConvProd = [],
  ListPage = 15,
  Page = 1,
  Params = "",
  NameSearch = ""
}) => {
  const [arrCon, setArrCon] = useState<faceProduct[][]>([]);
  const [conIndex, setConIndex] = useState<number>(0);
  const [listIndex, setListIndex] = useState<number>(0);
  const [prodLengt, setProdLengt] = useState<number>(15);

  const ListBooClick = index => {
    if (index >= 0 && index < arrCon.length) {
      window.scrollTo(0, 0);
      setConIndex(index);
      index > 5 ? setListIndex(index - 5) : setListIndex(0);
    }
  };
  const ListOptiClick = useCallback(
    (newLengt: number, newPage: number) => {
      window.scrollTo(0, 0);
      if (newPage === 1 && newLengt < 15) {
        setProdLengt(15);
        setListIndex(0);
        setConIndex(0);
      }
      const arrList: faceProduct[][] = [];
      for (let i = 0; i < arrConvProd.length; i += newLengt) {
        arrList.push(arrConvProd.slice(i, i + newLengt));
      }
      setArrCon(arrList);
    },
    [arrConvProd]
  );

  useEffect(() => {
    const BoolPage =
      Page > 0 && Page <= Math.ceil(arrConvProd.length / ListPage);
    const BoolListPage = [15, 30, 70, 140].includes(ListPage);
    if (BoolPage && BoolListPage) {
      setProdLengt(ListPage);
      setConIndex(Page - 1);
      ListOptiClick(ListPage, Page);
      if (Page > 6) {
        setListIndex(Page - 6);
      }
    } else {
      ListOptiClick(15, 1);
    }
  }, [arrConvProd, ListOptiClick, ListPage, Page]);

  return (
    <Fragment>
      <h1>{`results ${arrConvProd.length} for ${NameSearch}`}</h1>
      {!!arrCon.length && (
        <Fragment>
          <ProductList arrListProd={arrCon[conIndex]} />
          <Fragment>
            {arrCon
              .map((value, index) => (
                <NavLink
                  to={`${Params}ListPage=${prodLengt}&Page=${index + 1}`}
                  onClick={() => {
                    ListBooClick(index);
                  }}
                  key={`${arrCon[index][0].id}`}
                >
                  {index + 1}
                </NavLink>
              ))
              .slice(listIndex, listIndex + 10)}
            <select
              value={prodLengt}
              onChange={({ target: { value } }) => {
                setProdLengt(+value);
                ListOptiClick(+value, 1);
              }}
            >
              {[15, 30, 70, 140].map((val, ind) => (
                <option key={ind + 0.1 + val}>{val}</option>
              ))}
            </select>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ConveyorProduct;
