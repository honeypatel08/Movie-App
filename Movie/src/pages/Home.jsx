import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getNowPlaying } from "../services/api";
import "../css/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const data = await getNowPlaying();
        setMovies(data);
      } catch (err) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>About Us</h2>
        <p>
            Welcome to Movie App, your go-to destination for discovering popular, top-rated, and upcoming movies. 
            Dive into a world of entertainment with not only movies but also TV shows and music—all in one place.
            Explore, enjoy, and stay updated with the latest in entertainment!
        </p>
      </aside>

      <main className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search Movies..." />
          <button>Search</button>
        </div>

        <h2>Displaying Now-Playing Movies</h2>

        {error && <p className="error">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="movieGrid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: shivipp2005@gmail.com | Phone: +1 (123)-456-7890</p>
      </footer>
    </div>
  );
}

export default Home;
