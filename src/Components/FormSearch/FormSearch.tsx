import React, { FC, useState, useMemo, Fragment } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

import { FormSearchOption } from "./FormSearchArray";
import { FormSearchInput } from "./FormSearchObject";
import objCheckURL from "../../Containers/Class/CheckURL"

const FormSearch: FC<RouteComponentProps<{ schProd: string }>> = ({
  match: {
    params: { schProd }
  }
}) => {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  useMemo(() => {
    const { Category, Search } = objCheckURL.FormSearchCheckURL(schProd);
    setSearch(Search);
    setCategory(Category);
  }, [schProd]);

  return (
    <Fragment>
      <input
        {...FormSearchInput}
        value={search}
        placeholder={"Enter search text"}
        onChange={({ target }) => {
          setSearch(target.value);
        }}
      />
      <NavLink
        to={`/sch/Categories=${category}&Search=${search}&ListPage=${15}&Page=${1}`}
      >
      </NavLink>
      <select
        value={category}
        onChange={({ target: { value } }) => {
          setCategory(value);
        }}
      >
        <Fragment>{FormSearchOption}</Fragment>
      </select>
    </Fragment>
  );
};

export default withRouter(FormSearch);
