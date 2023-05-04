import React from "react";
import "./ShowDetails.css";
import { Link } from "react-router-dom";
const ShowDetails = ({ show }) => {
  const { image, id } = show;

  return (
    <>
      <div className="show">
        <img src={image?.original} alt="movie" />
        <Link to={`/booking/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </>
  );
};

export default ShowDetails;
