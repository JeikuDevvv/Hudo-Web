import React from "react";
import "./TextInputField.css";

const TextInputField = ({
  labelText,
  value,
  onChange,
  width,
  isFilled = true,
}) => {
  let containerStyle = {
    width: width,
    marginBottom: "20px",
  };

  let inputStyle = {
    width: "100%",
    border: isFilled ? "1px solid #ccc" : "1px solid red",
  };

  return (
    <div className="textinputfield-container" style={containerStyle}>
      <div className="bg-border" style={inputStyle}>
        <p className="text-style" style={{ color: isFilled ? "#333" : "red" }}>
          {labelText}
        </p>
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
