import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../../API/api";
import "./Films.scss";
import { NavLink } from "react-router-dom";
import Moviecard2 from "../../moviecard2/Moviecard2";
import { MovieContext } from "../../../context";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [count, setcount] = useState(4);
  const {language} = useContext(MovieContext)
  async function getfilms(key) {
    let result = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=1`
    );
    let { data } = result;
    setFilms(data.results);
  }
  useEffect(() => {
    getfilms(api_key);
  }, [language]);
  console.log(films);
  return (
    <div id="films">
      <div className="container">
        <h1>Популярные фильмы</h1>
        <div className="films">
          {films.slice(0, count).map((el) => (
            <Moviecard2 el={el} key={el.id} />
          ))}
        </div>
        <center>
          <button onClick={() => setcount(count + 4)}>Больше...</button>
        </center>
      </div>
    </div>
  );
};

export default Films;
