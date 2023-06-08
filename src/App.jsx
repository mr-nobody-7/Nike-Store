import React from "react";
import { Navbar, Cart, FlexContent, Hero, Sales, Stories, Footer } from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent data={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent data={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerApi={footerAPI}/>
    </>
  );
};

export default App;
