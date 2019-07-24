import React from "react";
import CategorySearch from ".././CategorySearch";
import Product from "../Product";
import SearchProd from "../SearchProd";
import NewProd from "../NewProd";
import Header from "../Header";
import Footer from "../Footer";

export const RouteProduct = () => (
  <>
    <Header />
    <main>
      <Product />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export const RouteCategProduct = () => (
  <>
    <Header />
    <main>
      <CategorySearch />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export const RouteHead = () => (
  <>
    <Header />
    <main>
      <h1>{"Welcome to Amasia"}</h1>
      <NewProd />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);
export const RouteSchProd = () => (
  <>
    <Header />
    <main>
      <SearchProd />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);
