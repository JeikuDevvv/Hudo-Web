import React from "react";
import "./Navbar.css";

import { logo } from "../../constants/images";

import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="bg-color">
        <div className="logoText-container">
          <img src={logo} alt="" />
          <h3>Housing & Urban Development Office</h3>
        </div>
        <div className="navButtons">
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="Admin">Admin</a>
            </li>
            <li>
              <a href="Benselcom">Benselcom</a>
            </li>
            <li>
              <a href="ComMortage">Community Mortage</a>
            </li>
            <li>
              <a href="ComOrganizer">Community Organizer</a>
            </li>
            <li>
              <a href="Demolition">Demolition</a>
            </li>
            <li>
              <a href="search">
                <HiOutlineSearch />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
