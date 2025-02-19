import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? "active-link" : ""}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? "active-link" : ""}
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? "active-link" : ""}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? "active-link" : ""}
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
