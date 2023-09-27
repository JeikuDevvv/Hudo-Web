import React from "react";
import "./Navbar.css";

import { logo } from "../../constants/images";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Housing & Urban Development Office" />
        <p>Housing & Urban Development Office</p>
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Admin">Admin</a>
          </li>
          <li>
            <a href="/Benselcom">Benselcom</a>
          </li>
          <li>
            <a href="/CommunityMortage">Community Mortgage</a>
          </li>
          <li>
            <a href="/CommunityOrganizer">Community Organizer</a>
          </li>
          <li>
            <a href="/Demolition">Demolition</a>
          </li>
          <li>
            <a href="search">
              <HiOutlineSearch />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
