import React from "react";
import "./PrimaryButton.css";

const CenteredButton = ({ buttonText, onClick, width }) => {
  const containerStyle = {
    width: width,
  };

  return (
    <div className="primarybutton-container" style={containerStyle}>
      <button type="button" className="button-style" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default CenteredButton;
