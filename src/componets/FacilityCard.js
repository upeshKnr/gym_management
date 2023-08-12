import React from "react";
// import { useSpring, animated } from 'react-spring';

const FacilityCard = ({ imgSrc, title }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default FacilityCard;
