// components/MovieCard.jsx
const MovieCard = ({ movie }) => {
  const { title, imageUrl, rating, ageRating } = movie;

  // Create an array of 5 stars, filled based on rating
  const stars = Array(5)
    .fill(null)
    .map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : "empty"}`}>
        ★
      </span>
    ));

  return (
    <div className="movie-card">
      <div className="poster-container">
        {imageUrl ? (
          <img src={imageUrl} alt={`${title} poster`} className="movie-poster" />
        ) : (
          <div className="movie-poster no-image">{title}</div>
        )}
        <span className="age-rating">{ageRating}</span>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="rating">{stars}</div>
      </div>
    </div>
  );
};

export default MovieCard;
