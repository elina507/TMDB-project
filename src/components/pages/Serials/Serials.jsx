import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../../API/api";
import "./Serials.scss";
import { Link } from "react-router-dom";

const Serials = () => {
  const [serials, setSerials] = useState([]);
  async function getSerials(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );
    let { results } = res.data;
    setSerials(results);
  }
  useEffect(() => {
    getSerials(api_key);
  }, []);
  console.log(serials);

  return (
    <>
      <div id="serials">
        <div className="container">
          <h1>Популярные сериалы</h1>
          <div className="serials">
            {serials.map((el) => (
              <div className="serials--card" data-aos="zoom-out">
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
                <div className="serials--card__vote">
                  <h3>{Math.round(el.vote_average * 10)}%</h3>
                </div>
                <h1>{el.title}</h1>
                <h2>{el.release_date}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Serials;
