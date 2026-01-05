import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../API/api";
import { Link, NavLink } from "react-router-dom";
import "./Moviecard.scss";
import { MovieContext } from "../../context";

const Moviecard = () => {
  const [moviecard, setMoviecard] = useState([]);
  const { language } = useContext(MovieContext);

  async function getMoviecard(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1`
    );
    let { results } = res.data;
    setMoviecard(results);
  }
  useEffect(() => {
    getMoviecard(api_key);
  }, [language]);
  return (
    <>
      <div id="popular">
        <div className="container">
          <div className="btns">
            <h1>В тренде</h1>
            <div className="btns--buttons">
              <button>
                <NavLink to={"/today"}>Сегодня</NavLink>
              </button>
              <button>
                <NavLink to={"/week"}>На этой неделе</NavLink>
              </button>
            </div>
          </div>
          <div className="popular">
            {moviecard.map((el) => (
              <div className="popular--card">
                <Link to={`moviedetails/${el.id}`}>
                  <img
                    src={
                      el.poster_path
                        ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}`
                        : film
                    }
                    alt={el.title}
                    width={250}
                  />
                </Link>

                <div className="popular--card__vote">
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

export default Moviecard;
