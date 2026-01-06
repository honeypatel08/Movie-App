import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand"> 
            <Link to="/">Entertainment</Link>
        </div>
         <div className="dropdown">
            <button className="dropbtn">Movies ▾</button>
                <div className="dropdown-content">
                    <Link to="/movies/popular">Popular</Link>
                    <Link to="/movies/top-rated">Top Rated</Link>
                    <Link to="/movies/upcoming">Upcoming</Link>
                </div>
        </div>

        <div className="dropdown">
        <button className="dropbtn">TV Shows ▾</button>
        <div className="dropdown-content">
            <Link to="/tv-show/popular">Popular</Link>
            <Link to="/tv-show/top-rated">Top Rated</Link>
            <Link to="/tv-show/airing-today">Airing Today</Link>
            <Link to="/tv-show/on-tv">On TV</Link>
        </div>
        </div>

        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar