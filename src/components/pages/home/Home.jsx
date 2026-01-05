import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../../API/api";
import "./Home.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Registration from "../../registration/Registration";
import Moviecard from "../../moviecard/Moviecard";

const Home = () => {
  const [home, setHome] = useState([]);
  const nav = useNavigate();
  const [movieName, setMovieName] = useState("");
  const [allBack, setAllBack] = useState([]);
  const searchMovie = () => {
    if (movieName.trim() === "") {
      alert("Напишите название фильма, сериала!");
    } else {
      nav(`/search/${movieName}`);
      setMovieName("");
    }
  };
  async function getHome(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );
    let { results } = res.data;
    setHome(results);
    let back = Math.round(Math.random() * results.length);
    setAllBack(results[back].backdrop_path);
  }
  useEffect(() => {
    getHome(api_key);
  }, []);
  console.log(allBack);

  return (
    <>
      <div
        id="home"
        style={{
          background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${allBack}) no-repeat center/cover`,
        }}
      >
        <div id="home1" className="home--div1">
          <div className="container">
            <h1>
              Добро пожаловать. <br />{" "}
              <span>
                Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
              </span>
            </h1>
            <div className="home--div1__btn">
              <input
                type="text"
                placeholder="Найти фильм,сериал..."
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
                onKeyDown={(e) => {
                  e.key === "Enter" ? searchMovie() : null;
                }}
              />
              <button onClick={() => searchMovie()}>Поиск</button>
            </div>
          </div>
        </div>
      </div>
      <Moviecard/>
      <Registration />
    </>
  );
};

export default Home;
