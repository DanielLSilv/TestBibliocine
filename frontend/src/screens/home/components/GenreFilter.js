// components/GenreFilter.jsx
const GenreFilter = ({ activeGenre, onGenreChange }) => {
  const genres = ["TERROR", "COMÉDIA", "DRAMA", "AÇÃO"];

  return (
    <div className="genre-filter">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`genre-button ${activeGenre === genre ? "active" : ""}`}
          onClick={() => onGenreChange(activeGenre !== genre ? genre : "all")}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
