import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { api_key } from "../../API/api";
import { data, NavLink, useParams } from "react-router-dom";
import "./Details.scss";
import { IoMenu } from "react-icons/io5";
import { FaBookmark, FaHeart, FaPlay } from "react-icons/fa";
import ActorsDetails from "../actors-details/ActorsDetails";
import VideoDetails from "../videoDetails/VideoDetails";
import bgFilm from "../../assets/images/Movie-Night-1024x536.webp";
import { MovieContext } from "../../context";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const { language } = useContext(MovieContext);
  const { favorite, setFavorite } = useContext(MovieContext);
  console.log(movieId);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  async function getMovieDetails(key) {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    );
    setDetails(res.data);
    setFavorite(details);
  }

  useEffect(() => {
    getMovieDetails(api_key);
  }, [language, favorite]);
  console.log(details);
  return (
    <>
      <div
        id="details"
        style={{
          // inset: 0,
          background: details.backdrop_path
            ? `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}) no-repeat center/cover`
            : bgFilm,
          // filter: "blur(12px)",
          // zIndex: 1,
        }}
      >
        <div className="bgr">
          <div className="container">
            <div className="bgr--details">
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt="img"
                width={370}
                data-aos="fade-right"
              />
              <div className="bgr--details__card" data-aos="fade-left">
                <div className="bgr--details__card--text">
                  <h1>
                    {details.original_title}{" "}
                    <span>({details.release_date?.slice(0, 4)})</span>
                  </h1>
                </div>
                <div className="bgr--details__card--text2">
                  <h3>{details.release_date}</h3>
                  <h3>
                    ({details.origin_country}) •{" "}
                    {details.genres?.map((el) => el.name)} •{" "}
                    {Math.floor(details.runtime / 60)}h {details.runtime % 60}
                    min
                  </h3>
                </div>
                <div className="bgr--details__card--vibe">
                  <div className="bgr--details__card--vibe__vote">
                    <h3 data-aos="flip-right">
                      {Math.round(details.vote_average * 10)}%
                    </h3>
                  </div>
                  <h4>Рейтинг</h4>
                  <button data-aos="flip-right">What's your Vibe?</button>
                </div>
                <div className="bgr--details__card--icons">
                  <div
                    className="bgr--details__card--icons__circle"
                    data-aos="flip-right"
                  >
                    <a href="#">
                      <IoMenu className="icon" />
                    </a>
                  </div>
                  <div
                    className="bgr--details__card--icons__circle"
                    data-aos="flip-right"
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLiked(!isLiked);
                      }}
                    >
                      <FaHeart className={`icon ${isLiked ? "liked" : ""}`} />
                    </a>
                  </div>

                  <div
                    className="bgr--details__card--icons__circle"
                    data-aos="flip-right"
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsFavorite(!isFavorite);
                        setFavorite(details); // если нужно сохранять в избранные
                      }}
                    >
                      <FaBookmark
                        className={`icon ${isFavorite ? "active" : ""}`}
                      />
                    </a>
                  </div>
                </div>
                <h4>
                  <i>{details.tagline}</i>
                </h4>
                <h2>Обзор</h2>
                <p>
                  <i>{details.overview}</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ActorsDetails kinoId={movieId} />
      <VideoDetails videoId={movieId} />
    </>
  );
};

export default MovieDetails;
