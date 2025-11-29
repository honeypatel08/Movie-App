// all meked fav in this pade display
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard"; 

function favorite(){

    const{favorites} = useMovieContext(); 
    
    if (favorites && favorites.length > 0) {
        return (
            <div className="favGrid">
            <h2>Marked Favorites Movies</h2>
            <div className="movieInGrid">
                {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
        );
    }
        // When no favorites
    return (
        <div className="favoriteEmpty">
            <h2>No Favorite Marked Movie Yet</h2>
            <p>Start adding and they will appear here</p>
        </div>
    );

} 

export default favorite