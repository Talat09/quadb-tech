import React, { useEffect, useState } from "react";
import ShowDetails from "../ShowDetails/ShowDetails";
import "./Show.css";
const Show = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setShows(data);
      });
  }, []);
  return (
    <>
      <div className="shows">
        {shows.map((show) => (
          <ShowDetails key={show.show.id} show={show.show}></ShowDetails>
        ))}
      </div>
    </>
  );
};

export default Show;
