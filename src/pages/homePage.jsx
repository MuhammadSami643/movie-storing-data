import { useState } from "react";
import { Link } from "react-router-dom";
import MovieForm from "../components/movieForm";
import "../pagesCSS/homePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="landing-home">
      <h1>Welcome to My Movie Activity Log</h1>
      <p>Track the movies you watch and log your daily activities!</p>

      <MovieForm addMovie={addMovie} />

      <div className="movie-list">
        <h3>Movies You Watched:</h3>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.name} - {movie.date}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/activity-log" className="btn">
        Go to Activity Log
      </Link>
    </div>
  );
};

export default HomePage;
