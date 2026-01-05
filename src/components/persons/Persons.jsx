import React, { act, useContext, useEffect, useState } from "react";
import "./Persons.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api_key } from "../../API/api";
import ActorsFilms from "../ActorsFilms/ActorsFilms";
import ActorsDetails from "../actors-details/ActorsDetails";
import { MovieContext } from "../../context";

const Persons = () => {
  const [persons, setPersons] = useState({});
  const { actorId } = useParams();
  const [bio, setBio] = useState(false);
  const [biolength, setBiolength] = useState(310);
  const { language } = useContext(MovieContext);

  async function getActorsDetails(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`
    );
    let { data } = res;
    setPersons(data);
  }
  useEffect(() => {
    getActorsDetails(api_key);
  }, [language]);
  console.log(persons);

  return (
    <>
      <div id="persons">
        <div className="container">
          <div className="persons">
            <img
              src={`https://media.themoviedb.org/t/p/w600_and_h900_face${persons.profile_path}`}
              alt="img"
            />
            <div className="persons--profile">
              <h1>{persons.name}</h1>
              {persons.biography?.length > 0 ? (
                <h2>Биография</h2>
              ) : (
                <h2>Биография не найдена</h2>
              )}
              <p>
                {persons.biography?.slice(0, biolength)}{" "}
                <span
                  onClick={() => {
                    setBio(!bio);
                    biolength === 310
                      ? setBiolength(persons.biography.length)
                      : setBiolength(200);
                  }}
                >
                  {!bio ? "Читать ещё" : "Скрыть"}
                </span>
              </p>
              <h3>Персональная информация актёра:</h3>
              <div className="persons-punkts">
                <div className="persons-punkts__facts">
                  <h2>Известность за</h2>
                  <p>{persons.known_for_department}</p>
                </div>
                <div className="persons-punkts__facts">
                  <h2>Известно авторство</h2>
                  <p>{Math.round(persons.popularity * 10)}</p>
                </div>
                <div className="persons-punkts__facts">
                  <h2>Дата рождения</h2>
                  <p>{persons.birthday}</p>
                </div>
                <div className="persons-punkts__facts">
                  <h2>Место рождения</h2>
                  <p>{persons.place_of_birth}</p>
                </div>
              </div>
            </div>
          </div>
          <ActorsFilms filmsId={actorId} />
        </div>
      </div>
    </>
  );
};

export default Persons;
