import React, { useContext, useEffect, useState } from "react";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Serials from "./components/pages/Serials/Serials";
import Films from "./components/pages/films/Films";
import Actors from "./components/pages/Actors/Actors";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/moviedetails/MovieDetails";
import Registrdetails from "./components/registrDetails/Registrdetails";
import Persons from "./components/persons/Persons";
import ActorsFilms from "./components/ActorsFilms/ActorsFilms";
import Search from "./components/Search/Search";
import Favorite from "./components/pages/favorite/Favorite";
import { MovieContext } from "./context";
import TMDB from "./components/pages/TMDB/TMDB";
import Busennes from "./components/pages/businnes/Busennes";

const App = () => {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/films",
      element: <Films />,
    },
    {
      id: 3,
      link: "/serials",
      element: <Serials />,
    },
    {
      id: 4,
      link: "/actors",
      element: <Actors />,
    },
    {
      id: 5,
      link: "/week",
      element: <Home />,
    },
    {
      id: 6,
      link: "/today",
      element: <Home />,
    },
    {
      id: 7,
      link: "/moviedetails/:movieId",
      element: <MovieDetails />,
    },
    {
      id: 8,
      link: "/registration",
      element: <Registrdetails />,
    },
    {
      id: 9,
      link: "/moviedetails/actors-detail/:actorId",
      element: <Persons />,
    },
    {
      id: 10,
      link: "/moviedetails/actorsfilms/:filmsId",
      element: <ActorsFilms />,
    },
    {
      id: 11,
      link: "/search/:kinoName",
      element: <Search />,
    },
    {
      id: 12,
      link: "/favorite",
      element: <Favorite />,
    },
    {
      id: 13,
      link: "/tmdb",
      element: <TMDB />,
    },
    {
      id: 14,
      link: "/business",
      element: <Busennes />,
    },
  ];
  const { dark } = useContext(MovieContext);
  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
