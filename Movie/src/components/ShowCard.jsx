import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function ShowCard({ show }) {
  const { addToFavorites, removeToFavorites, isFavorites } = useMovieContext();
  const favs = isFavorites(show.id, "tv");

  function onFavClick(e) {
    e.preventDefault();
    if (favs) removeToFavorites(show.id, "tv");
    else addToFavorites(show, "tv");
  }

  return (
    <div className="movieCard">
      <div className="moviePoster">
        <img
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={show.name}
        />
        <div className="rating">⭐ {show.vote_average?.toFixed(1)}</div>
        <button className={`favoriteBtn ${favs ? "active" : ""}`} onClick={onFavClick}>
          ♥
        </button>
      </div>

      <div className="info">
        <h3>{show.name}</h3>
        <p>
          {show.first_air_date
            ? new Date(show.first_air_date).toLocaleDateString()
            : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default ShowCard;
