import React, { Fragment } from "react";
import CategorySearch from ".././CategorySearch";
import Product from "../Product";
import SearchProd from "../SearchProd";
import NewProd from "../NewProd";
import Header from "../Header";
import Footer from "../Footer";

export const RouteProduct = () => (
  <Fragment>
    <Header/>
    <main>
      <Product/>
    </main>
  </Fragment>
);

export const RouteCategProduct = () => (
  <Fragment>
    <Header/>
    <main>
      <CategorySearch />
    </main>
  </Fragment>
);

export const RouteHead = () => (
  <Fragment>
    <Header/>
    <main>
      <h1>{"Welcome to Amasia"}</h1>
      <NewProd />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);
export const RouteSchProd = () => (
  <Fragment>
    <Header />
    <main>
      <SearchProd />
    </main>
  </Fragment>
);
