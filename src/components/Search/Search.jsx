import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../API/api";
import Moviecard from "../moviecard/Moviecard";
import { Link, NavLink, useParams } from "react-router-dom";
import Moviecard2 from "../moviecard2/Moviecard2";
import "./Search.scss"
import film from "../../assets/images/film.jpg"

const Search = () => {
  const [search, setSearch] = useState([]);
  const { kinoName } = useParams();

  async function getMovie(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${kinoName}`
    );
    let { results } = res.data;
    setSearch(results);
  }
  useEffect(() => {
    getMovie(api_key);
  }, [kinoName]);
  return (
    <div id="search">
      <div className="container">
        <div className="search">
          {search.map((el) => (
            <div className="search--card" key={el.id}>
              <Link to={`/moviedetails/${el.id}`}>
                <img
                  src={el.poster_path ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${el.poster_path}` : film}
                  alt="img"
                  width={300}
                  height={400}
                />
              </Link>
              <div className="search--card__vote">
                <h3>{Math.round(el.vote_average * 10)}%</h3>
              </div>
              <h1>{el.title}</h1>
              <h2>{el.release_date}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
