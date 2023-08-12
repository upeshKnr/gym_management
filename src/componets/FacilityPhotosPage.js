import React from "react";
import FacilityCard from "./FacilityCard";
import gymImages from "../assets/gym_images"; // Import facility photos

const FacilityPhotosPage = () => {
  return (
    <div className="container">
      <div className="row">
        {gymImages.map((image, index) => (
          <div className="col-md-4" key={index}>
            <FacilityCard imgSrc={image.src} title={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityPhotosPage;
