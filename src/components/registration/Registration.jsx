import React from "react";
import "./Registration.scss";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div
      id="registr"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="container">
        <h1>Присоединяйтесь сегодня</h1>
        <div className="registr">
          <div className="registr--text1">
            <p>
              Get access to maintain your own{" "}
              <i>custom personal lists, track what you've seen</i> and search{" "}
              <br /> and filter for <i>what to watch next</i>—regardless if it's
              in theatres or on TV.
            </p>
            <button>
              <NavLink to={"/registration"}>Зарегистрироваться</NavLink>
            </button>
          </div>
          <div className="registr--text2">
            <h3>•Enjoy TMDB ad free</h3>
            <h3>•Maintain a personal watchlist</h3>
            <h3>•Log the movies and TV shows you've seen</h3>
            <h3>•Build custom lists</h3>
            <h3>•Contribute to and improve our database</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
