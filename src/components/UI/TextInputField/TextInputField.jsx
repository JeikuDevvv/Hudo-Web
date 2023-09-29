import React from "react";
import "./TextInputField.css";

const TextInputField = ({ labelText, value, onChange, width }) => {
  const containerStyle = {
    width: width,
  };

  return (
    <div className="textinputfield-container" style={containerStyle}>
      <div className="bg-border">
        <p className="text-style">{labelText}</p>
        <input
          type="text"
          className="textInput"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInputField;
