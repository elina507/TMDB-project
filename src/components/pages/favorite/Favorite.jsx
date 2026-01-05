import React, { useContext, useEffect, useState } from "react";
import "./Favorite.scss";
import { MovieContext } from "../../../context";
import Moviecard2 from "../../moviecard2/Moviecard2";

const Favorite = () => {
  const { favorite } = useContext(MovieContext);
  const [card, setCard] = useState([]);
  function setFavorite() {
    if (favorite.length !== 0) {
      let res = JSON.parse(localStorage.getItem("card")) || [];
      let result = [...res, favorite];
      localStorage.setItem("card", JSON.stringify(result));
      getFavorite();
    }
  }
  function getFavorite() {
    let res = JSON.parse(localStorage.getItem("card")) || [];
    setCard(res);
  }
  useEffect(() => {
    getFavorite();
    setFavorite();
  }, []);

  console.log(favorite);

  const deleteFavorite = (id) => {
    const updated = card.filter((el) => el.id !== id);
    setCard(updated);
    localStorage.setItem("card", JSON.stringify(updated));
  };

  return (
    <div id="favorite">
      <div className="container">
        <h1>Избранные</h1>
        <div className="favorite">
          {card.map((el) => (
            <>
              <div className="card">
                <Moviecard2 el={el} />
                <button onClick={() => deleteFavorite(el.id)}>⨯</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
