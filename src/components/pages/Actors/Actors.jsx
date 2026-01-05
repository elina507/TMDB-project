import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api_key } from "../../../API/api";
import { Link } from "react-router-dom";
import "./Actors.scss";
import { MovieContext } from "../../../context";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const { language } = useContext(MovieContext);

  const getActors = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=${language}&page=1`
    );
    console.log(res.data.results);

    setActors(res.data.results);
  };

  useEffect(() => {
    getActors();
  }, [language]);

  return (
    <div id="actors">
      <div className="container">
        <h1>Популярные актёры:</h1>
        <div className="actors">
          {actors.map((el) =>
            el.profile_path ? (
              <div className="actors--card">
                <Link
                  key={el.id}
                  to={`/moviedetails/actors-detail/${el.id}`}
                  className="actor-card"
                >
                  <img
                    src={`https://media.themoviedb.org/t/p/w470_and_h470_face${el.profile_path}`}
                    alt={el.name}
                  />
                  <h3>{el.name}</h3>
                  <p>Чтобы узнать больше нажмите здесь...</p>
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Actors;
