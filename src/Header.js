import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment className="menu">
      <nav className="left-nav">
        <ul className="header-list">
          <li>
            <a href="">Julián Mabesoy</a>
          </li>
        </ul>
      </nav>
      <nav className="right-nav">
        <ul className="header-list">
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Portafolio</a>
          </li>
          <li>
            <a href="">Contact me</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export { Header };
