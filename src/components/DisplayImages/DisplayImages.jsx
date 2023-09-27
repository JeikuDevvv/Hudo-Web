import React from "react";
import "./DisplayImages.css";
import { cityHall } from "../../constants/images";

const DisplayImages = () => {
  return (
    <div className="displayImages-container">
      <img src={cityHall} alt="cityHall" className="cityHall" />
    </div>
  );
};

export default DisplayImages;
