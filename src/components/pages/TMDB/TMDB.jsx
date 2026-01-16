import React from "react";
import "./TMDB.scss";

const TMDB = () => {
  return (
    <div
      id="tmdb"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url("https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      data-aos="flip-down"
    >
      <div className="container">
        <div className="tmdb">
          <h1>Hi there,</h1>
          <h2>Let's talk about TMDB</h2>
          <p>
            The Movie Database (TMDB) is a community built movie and TV
            database. Every piece of data has <br /> been added by our amazing
            community dating back to 2008. TMDB's strong international focus and{" "}
            <br />
            breadth of data is largely unmatched and something we're incredibly
            proud of. Put simply, we live <br /> and breathe community and
            that's precisely what makes us different.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TMDB;
