import React from "react";

const Card = ({ results }) => {
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < results.genre_ids.length; i++) {
      switch (results.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.slice(0, 5).map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(results.id.toString())) {
      storedData.push(results.id);
      window.localStorage.movies = storedData;
      window.alert("Coup de coeur ajouté !");
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter((id) => id != results.id);

    window.localStorage.movies = newData;
    window.alert("Votre coup de coeur va être supprimé !");
  };

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <li className="card">
      <img
        src={
          results.poster_path
            ? "https://image.tmdb.org/t/p/original/" + results.poster_path
            : "./assets/img/poster.jpg"
        }
        alt={`affiche ${results.original_title}`}
      />
      <h2>{results.original_title}</h2>
      {results.release_date ? (
        <span>Sorti le : {dateFormater(results.release_date)}</span>
      ) : null}

      <h2>
        {results.vote_average + "/10 "}
        <i className="fa-solid fa-star"></i>
      </h2>

      <ul className="gender">
        {results.genre_ids
          ? genreFinder()
          : results.genres
              .slice(0, 4)
              .map((genre, index) => (
                <li key={index.toString()}>{genre.name}</li>
              ))}
      </ul>

      {results.overview ? <h2>Synopsis</h2> : ""}
      <p>{results.overview}</p>
      {results.genre_ids ? (
        <button onClick={() => addStorage()}>Ajouter aux coups de coeur</button>
      ) : (
        <button
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          Supprimer de la liste
        </button>
      )}
    </li>
  );
};

export default Card;
