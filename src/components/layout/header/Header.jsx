import React, { useContext, useState } from "react";
import logo from "../../../assets/images/header-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.scss";
import { MdDarkMode } from "react-icons/md";
import { MovieContext } from "../../../context";
import { IoSunny } from "react-icons/io5";

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
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header--nav">
            <img src={logo} alt="img" width={210} />
            <NavLink to={"/"}>Главное</NavLink>
            <NavLink to={"/films"}>Фильмы</NavLink>
            <NavLink to={"/serials"}>Сериалы</NavLink>
            <NavLink to={"/actors"}>Актёры</NavLink>
            <NavLink to={"/favorite"}>Избранные</NavLink>
            <Link to="/" onClick={() => setDark(!dark)}>
              {dark ? <MdDarkMode /> : <IoSunny />}
            </Link>
          </div>
          <div className="header--search">
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="ru-RU">RU</option>
              <option value="en-US">EN</option>
            </select>
            <div className="header--search__form">
              <input
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
