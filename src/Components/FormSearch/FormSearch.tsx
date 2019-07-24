import React, { FC, useState } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

import { FormSearchOption } from "./FormSearchArray";
import { FormSearchInput } from "./FormSearchObject";
import objCheckURL from "../../Containers/Class/CheckURL";

const FormSearch: FC<RouteComponentProps<{ schProd: string }>> = ({
  match: {
    params: { schProd }
  }
}) => {
  const [form, setForm] = useState(() => {
    const { Category, Search } = objCheckURL.FormSearchCheckURL(schProd);
    return { Category, Search };
  });
  return (
    <form>
      <input
        {...FormSearchInput}
        value={form.Search}
        placeholder={"Enter search text"}
        onChange={({ target }) => {
          setForm(f => ({ ...f, Search: target.value }));
        }}
      />
      <NavLink
        to={`/sch/Categories=${form.Category}&Search=${
          form.Search
        }&ListPage=${15}&Page=${1}`}
        onClick={e => !form.Search && e.preventDefault()}
      >
        <input type={"submit"} value={"search"} />
      </NavLink>
      <select
        value={form.Category}
        onChange={({ target: { value } }) => {
          setForm(f => ({ ...f, Category: value }));
        }}
      >
        {FormSearchOption}
      </select>
    </form>
  );
};

export default withRouter(FormSearch);
