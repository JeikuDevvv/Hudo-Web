import React from "react";
import "./NavTab.css";

const NavTab = ({ tabs }) => {
  return (
    <div className="nav-tab">
      <ul className="nav-tab-list">
        {tabs.map((tab, index) => (
          <li key={index}>
            <a href="/">{tab}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavTab;
