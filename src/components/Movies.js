import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [inputValue, setInputValue] = useState("wars");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=85eed29827a51e2bf053ae769ba32741&language=fr-FR&query=${inputValue}`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [inputValue]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  const search = (e) => {
    setSearchMovie(e.target.value);
    if (e.target.value === "") {
      setSearchMovie("a");
    }
  };

  return (
    <div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Chercher un film..."
            defaultValue={search}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <button type="submit">Rechercher</button>
      </div>
      <div className="movies-card">
        {moviesData.slice(0, 18).map((results, movies) => (
          <Card key={movies} results={results} />
        ))}
      </div>
      <div className="top">
        <a href="#title">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Movies;
