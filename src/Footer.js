import React, { Fragment } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <Fragment className="menu">
      <nav>
        <ul className="footer-list">
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            {" "}
            <a href="">Correo</a>
          </li>
          <li>
            {" "}
            <a href="">Linkedin</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export { Footer };
