import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <div className="nav-tab">
      <ul className="nav-tab-list">
        <li>
          <a href="/">Incoming & Outgoing</a>
        </li>
        <li>
          <a href="/">Legal Assistant</a>
        </li>
        <li>
          <a href="/">Budget Officer</a>
        </li>
        <li>
          <a href="/">Project Coordinator</a>
        </li>
        <li>
          <a href="/">IT/Computer Programmer</a>
        </li>
      </ul>
    </div>
  );
};

export default NavTab;
