import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../API/api";
import { Link, useParams } from "react-router-dom";
import "./ActorsDetails.scss";
import actor from "../../assets/images/actor1.jpeg";
import { MovieContext } from "../../context";

const ActorsDetails = ({ kinoId }) => {
  const [actors, setActors] = useState([]);
  const { language } = useContext(MovieContext);

  const getActors = async (key) => {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${kinoId}/credits?api_key=${key}&language=${language}`
    );
    let { cast } = res.data;
    setActors(cast);
    console.log(cast);
  };
  useEffect(() => {
    getActors(api_key);
  }, [language]);

  return (
    <>
      <div id="actors1">
        <div className="container">
          <h1>Актёры:</h1>
          <div className="actors1">
            {actors.map((el) => (
              <div className="actors1--card" key={el.id}>
                <Link to={`/moviedetails/actors-detail/${el.id}`}>
                  <img
                    src={
                      el.profile_path
                        ? `https://media.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`
                        : actor
                    }
                    alt="img"
                  />
                </Link>
                <h1>{el.name}</h1>
                <h5>{el.character}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorsDetails;
