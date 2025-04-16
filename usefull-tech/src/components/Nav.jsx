import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landingpage</Link>
        </li>
        <li>
          <Link to="/about">About U</Link>
        </li>
        <li>
          <Link to="/filmbibliothek">Film Bibliothek</Link>
        </li>
        <li>
          <Link to="/zurgallerie">Zur Gallerie</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
