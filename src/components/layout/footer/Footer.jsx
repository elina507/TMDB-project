import React from "react";
import logo1 from "../../../assets/images/footer-logo.svg";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--div1">
            <img src={logo1} alt="img" width={130} />
            <button>
              <NavLink to={"/registration"}>ВСТУПИТЬ В СООБЩЕСТВО</NavLink>
            </button>
          </div>
          <div className="footer--div2">
            <h2>Главное</h2>
            <NavLink to={"/tmdb"}>О TMDB</NavLink>
            <NavLink to={"/business"}>API for Business</NavLink>
          </div>
          <div className="footer--div3">
            <h2>Участвуйте</h2>
            <NavLink to={"/addfilm"}>Добавить новый фильм</NavLink>
            <NavLink to={"/addserial"}>Добавить новый сериал</NavLink>
          </div>
          <div className="footer--div4">
            <h2>Сообщество</h2>
            <NavLink to={"/discussions"}>Обсуждения</NavLink>
            <NavLink to={"/doska"}>Доска почёта</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
