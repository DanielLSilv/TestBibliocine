import React, { useState, useEffect } from "react";
import NavigationTabs from "./components/NavigationTabs";
import GenreFilter from "./components/GenreFilter";
import "./home.css";
import MovieSection from "./components/MovieSection";
import { getPopularMovies } from "../../config/tmdb";

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState("filmes");
    const [activeGenre, setActiveGenre] = useState("all");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                console.log("Iniciando busca de filmes...");
                const popularMovies = await getPopularMovies();
                console.log("Filmes recebidos:", popularMovies);

                if (popularMovies.length === 0) {
                    setError(
                        "Nenhum filme encontrado. Por favor, tente novamente mais tarde."
                    );
                } else {
                    setMovies(popularMovies);
                    setError(null);
                }
            } catch (err) {
                console.error("Erro ao buscar filmes:", err);
                setError(
                    "Erro ao carregar os filmes. Por favor, tente novamente mais tarde."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <div className="loading">Carregando filmes...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    const filteredMovies = movies.filter(
        (movie) => activeGenre === "all" || movie.genres.includes(activeGenre)
    );

    return (
        <>
            <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <GenreFilter
                activeGenre={activeGenre}
                onGenreChange={setActiveGenre}
            />

            <MovieSection title="VOCÊ PODE GOSTAR" movies={filteredMovies} />

            <MovieSection title="ÚLTIMOS LANÇAMENTOS" movies={filteredMovies} />

            <MovieSection
                title="COMÉDIA"
                movies={movies.filter((movie) =>
                    movie.genres.includes("COMÉDIA")
                )}
            />

            <MovieSection
                title="AÇÃO"
                movies={movies.filter((movie) => movie.genres.includes("AÇÃO"))}
            />
        </>
    );
};
