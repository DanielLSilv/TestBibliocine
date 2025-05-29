// components/MovieSection.jsx
import MovieCard from "./MovieCard";

const MovieSection = ({ title, movies }) => {
  // Don't render the section if there are no movies
  if (movies.length === 0) return null;

  return (
    <section className="movie-section">
      <h2 className="section-title">{title}</h2>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
