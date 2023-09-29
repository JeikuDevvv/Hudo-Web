import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ type, onClick, className, buttonText, width }) => {
  const containerStyle = {
    width: width,
  };
  return (
    <div className="primarybutton-container" style={containerStyle}>
      <button
        type={type}
        className={`button-style ${className}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
