import React, { useState } from "react";
import "./Navbar.css";

import { logo } from "../../constants/images";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const navLinks = [
    { path: "/Home", text: "Home" },
    { path: "/Admin", text: "Admin" },
    { path: "/Benselcom", text: "Benselcom" },
    { path: "/CommunityMortage", text: "Community Mortgage" },
    { path: "/CommunityOrganizer", text: "Community Organizer" },
    { path: "/Demolition", text: "Demolition" },
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Housing & Urban Development Office" />
        <p>Housing & Urban Development Office</p>
      </div>
      <div className="nav-buttons">
        <ul>
          {navLinks.map((link) => (
            <NavItem
              key={link.path}
              path={link.path}
              text={link.text}
              active={activeLink === link.path}
              onClick={handleLinkClick}
            />
          ))}
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

const NavItem = ({ path, text, active, onClick }) => {
  const handleClick = () => {
    onClick(path);
  };

  return (
    <li>
      <a href={path} onClick={handleClick} className={active ? "active" : ""}>
        {text}
      </a>
    </li>
  );
};

export default Navbar;
