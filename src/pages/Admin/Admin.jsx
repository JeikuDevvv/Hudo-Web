import React from "react";
import "./Admin.css";

import { TextInputField } from "../../components";

const Admin = () => {
  return (
    <div className="main">
      <dev>
        <TextInputField labelText={"Title"} width="500px" />
      </dev>
      <p>Admin</p>
    </div>
  );
};

export default Admin;
