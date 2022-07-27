import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return(
    <nav id="main-navigation" aria-label="Main navigation">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Nav;