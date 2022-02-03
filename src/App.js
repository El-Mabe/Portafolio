import "./styles.css";
import React, { Fragment } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export default function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <Content />
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}
