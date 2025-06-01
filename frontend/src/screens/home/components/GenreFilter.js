// components/GenreFilter.jsx
const GenreFilter = ({ activeGenre, onGenreChange }) => {
    const genres = [
        { id: "TERROR", label: "Terror" },
        { id: "COMÉDIA", label: "Comédia" },
        { id: "DRAMA", label: "Drama" },
        { id: "AÇÃO", label: "Ação" },
        { id: "FICÇÃO", label: "Ficção" },
        { id: "SUSPENSE", label: "Suspense" },
        { id: "ROMANCE", label: "Romance" },
        { id: "MISTÉRIO", label: "Mistério" },
        { id: "FAMÍLIA", label: "Família" },
        { id: "FANTASIA", label: "Fantasia" },
        { id: "HISTÓRICO", label: "Histórico" },
        { id: "MUSICAL", label: "Musical" },
        { id: "CRIME", label: "Crime" },
        { id: "DOCUMENTÁRIO", label: "Documentário" },
        { id: "GUERRA", label: "Guerra" },
        { id: "FAROESTE", label: "Faroeste" },
        { id: "ANIMAÇÃO", label: "Animação" },
        { id: "AVENTURA", label: "Aventura" },
    ];

    return (
        <div className="genre-filter">
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    className={`genre-button ${
                        activeGenre === genre.id ? "active" : ""
                    }`}
                    onClick={() =>
                        onGenreChange(
                            activeGenre !== genre.id ? genre.id : "all"
                        )
                    }
                >
                    {genre.label}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;
