import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import film from "../../assets/images/film.jpg";

const Moviecard2 = ({ el }) => {
  return (
    <>
      <div id="films">
        <div className="container">
          <div className="films">
            <div className="films--card" key={el.id} data-aos="zoom-in-right">
              <Link to={`/moviedetails/${el.id}`}>
                <img
                  src={
                    el.poster_path
                      ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`
                      : film
                  }
                  alt="img"
                  width={320}
                  height={450}
                />
              </Link>
              <div className="films--card__vote">
                <h3>{Math.round(el.vote_average * 10)}%</h3>
              </div>
              <h1>{el.title}</h1>
              <h2>{el.release_date}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviecard2;
