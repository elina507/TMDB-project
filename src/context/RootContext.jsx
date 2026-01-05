import React, { useState } from "react";
import { MovieContext } from ".";

const RootContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("ru-RU");
  const [favorite, setFavorite] = useState([]);
  return (
    <>
      <MovieContext.Provider
        value={{
          language,
          dark,
          favorite,
          setLanguage,
          setDark,
          setFavorite,
        }}
      >
        {children}
      </MovieContext.Provider>
    </>
  );
};

export default RootContext;
