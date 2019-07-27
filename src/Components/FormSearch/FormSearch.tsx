import React, { FC, useState, useMemo, Fragment } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

import { FormSearchOption } from "./FormSearchArray";
import { FormSearchInput } from "./FormSearchObject";

const FormSearch: FC<RouteComponentProps<{ schProd: string }>> = ({
  match: {
    params: { schProd }
  }
}) => {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  useMemo(() => {
    const searchParams = new URLSearchParams(schProd);
    if (!!searchParams.get("Categories") && !!searchParams.get("Search")) {
      setCategory(`${searchParams.get("Categories")}`);
      setSearch(`${searchParams.get("Search")}`);
    } else {
      setSearch("");
      setCategory("All");
    }
  }, [schProd]);

  return (
    <form>
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
        onClick={e => !search && e.preventDefault()}
      >
        <input type={"submit"} value={"search"} />
      </NavLink>
      <select
        value={category}
        onChange={({ target: { value } }) => {
          setCategory(value);
        }}
      >
        <Fragment>{FormSearchOption}</Fragment>
      </select>
    </form>
  );
};

export default withRouter(FormSearch);
