import React from "react";
import "./Admin.css";

import { NavTab } from "../../components";
import { InOutForm } from "../../container";

const Admin = () => {
  return (
    <div className="main-container">
      <NavTab />
      <InOutForm />
    </div>
  );
};

export default Admin;
