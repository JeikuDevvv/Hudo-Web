import React from "react";
import "./InOutForm.css";

import TextInputField from "../../components/TextInputField/TextInputField";

const InOutForm = () => {
  return (
    <div className="content-container">
      <TextInputField labelText={"Title"} width={"500px"} />
    </div>
  );
};

export default InOutForm;
