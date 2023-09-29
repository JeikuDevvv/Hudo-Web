import React from "react";
import "./Benselcom.css";

import { PrimaryButton, TextInputField } from "../../components";

const Benselcom = () => {
  return (
    <div className="main">
      <PrimaryButton buttonText={"Benselcom"} type={"button"} />
      <TextInputField labelText={"Benselcom"} />
    </div>
  );
};

export default Benselcom;
