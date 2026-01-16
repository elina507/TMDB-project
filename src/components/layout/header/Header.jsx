import React, { useContext, useState } from "react";
import logo from "../../../assets/images/header-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.scss";
import { MdDarkMode } from "react-icons/md";
import { MovieContext } from "../../../context";
import { IoMenu, IoSunny } from "react-icons/io5";

const Header = () => {
  const nav = useNavigate();
  const [movieName, setMovieName] = useState("");
  const { dark, setDark, language, setLanguage } = useContext(MovieContext);

  const searchMovie = () => {
    if (movieName.trim() === "") {
      alert("Напишите название фильма, сериала!");
    } else {
      nav(`/search/${movieName}`);
      setMovieName("");
    }
  };

  return (
    <header id="header" data-aos="fade-down">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <img src={logo} alt="img" data-aos="fade-right" />
            <NavLink to={"/"} data-aos="flip-up">
              Главное
            </NavLink>
            <NavLink to={"/films"} data-aos="flip-up">
              Фильмы
            </NavLink>
            <NavLink to={"/serials"} data-aos="flip-up">
              Сериалы
            </NavLink>
            <NavLink to={"/actors"} data-aos="flip-up">
              Актёры
            </NavLink>
            <NavLink to={"/favorite"} data-aos="flip-up">
              Избранные
            </NavLink>
            <NavLink
              className="dark"
              to="/"
              onClick={() => setDark(!dark)}
              data-aos="flip-up"
            >
              {dark ? <MdDarkMode /> : <IoSunny />}
            </NavLink>
            <div className="icon">
              <IoMenu />
            </div>
          </div>
          <div className="header--search">
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="ru-RU">RU</option>
              <option value="en-US">EN</option>
            </select>
            <div className="header--search__form">
              <input
                data-aos="fade-left"
                type="text"
                placeholder="Найти фильм,сериал..."
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
                onKeyDown={(e) => {
                  e.key === "Enter" ? searchMovie() : null;
                }}
              />
              <a onClick={() => searchMovie()}>
                <FaSearch />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
