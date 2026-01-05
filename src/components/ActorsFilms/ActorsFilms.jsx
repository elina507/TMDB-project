import React, { useContext, useEffect, useState } from "react";
import "./ActorsFilms.scss";
import axios from "axios";
import { api_key } from "../../API/api";
import { Link } from "react-router-dom";
import film from "../../assets/images/film.jpg";
import { MovieContext } from "../../context";

const ActorsFilms = ({ filmsId }) => {
  const [actorsFilms, setactorsFilms] = useState([]);
  const { language } = useContext(MovieContext);

  async function getActorsFilms(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/person/${filmsId}/movie_credits?api_key=${key}&language=${language}`
    );
    setactorsFilms(res.data.cast);
  }
  useEffect(() => {
    getActorsFilms(api_key);
  },[language]);

  return (
    <div id="ActorsFilms">
      <h1>Известность за:</h1>
      <div className="actorsFilms">
        {actorsFilms.map((el) => (
          <div className="actorsFilms--card">
            <Link to={`/moviedetails/${el.id}`}>
              <img
                src={
                  el.poster_path
                    ? `https://media.themoviedb.org/t/p/w260_and_h390_face${el.poster_path}`
                    : film
                }
                alt="img"
                width={270}
                height={350}
              />
              <h5>{el.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsFilms;
