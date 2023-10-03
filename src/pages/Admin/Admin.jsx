import React from "react";
import "./Admin.css";

import { NavTab } from "../../components";
import { InOutForm } from "../../container";

const Admin = () => {
  const tabs = [
    "Incoming & Outgoing",
    "Legal Assistant",
    "Budget Officer",
    "Project Coordinator",
    "IT/Computer Programmer",
  ];

  return (
    <div className="main-container">
      <NavTab tabs={tabs} />
      <InOutForm />
    </div>
  );
};

export default Admin;
