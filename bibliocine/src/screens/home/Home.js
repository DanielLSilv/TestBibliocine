import React, { useState } from "react";
import NavigationTabs from "./components/NavigationTabs";
import GenreFilter from "./components/GenreFilter";
import "./home.css";
import MovieSection from "./components/MovieSection";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState("filmes");
  const [activeGenre, setActiveGenre] = useState("all");

  const movies = [
    {
      id: 1,
      title: "1917",
      imageUrl: "/movie-poster-1917.jpg",
      rating: 5,
      ageRating: "16",
      genres: ["DRAMA", "AÇÃO"],
    },
    {
      id: 2,
      title: "Inception",
      imageUrl: "/movie-poster-inception.jpg",
      rating: 5,
      ageRating: "14",
      genres: ["FICÇÃO", "AÇÃO", "SUSPENSE"],
    },
    {
      id: 3,
      title: "Interstellar",
      imageUrl: "/movie-poster-interstellar.jpg",
      rating: 5,
      ageRating: "12",
      genres: ["FICÇÃO", "DRAMA"],
    },
    {
      id: 4,
      title: "Parasite",
      imageUrl: "/movie-poster-parasite.jpg",
      rating: 5,
      ageRating: "16",
      genres: ["DRAMA", "SUSPENSE"],
    },
    {
      id: 5,
      title: "The Dark Knight",
      imageUrl: "/movie-poster-dark-knight.jpg",
      rating: 5,
      ageRating: "14",
      genres: ["AÇÃO", "DRAMA", "CRIME"],
    },
    {
      id: 6,
      title: "Avengers: Endgame",
      imageUrl: "/movie-poster-endgame.jpg",
      rating: 4,
      ageRating: "12",
      genres: ["AÇÃO", "FICÇÃO", "AVENTURA"],
    },
    {
      id: 7,
      title: "The Godfather",
      imageUrl: "/movie-poster-godfather.jpg",
      rating: 5,
      ageRating: "18",
      genres: ["DRAMA", "CRIME"],
    },
    {
      id: 8,
      title: "La La Land",
      imageUrl: "/movie-poster-lalaland.jpg",
      rating: 4,
      ageRating: "10",
      genres: ["ROMANCE", "MUSICAL", "DRAMA"],
    },
    {
      id: 9,
      title: "Spider-Man: No Way Home",
      imageUrl: "/movie-poster-spiderman-nwh.jpg",
      rating: 4,
      ageRating: "12",
      genres: ["AÇÃO", "FICÇÃO", "AVENTURA"],
    },
    {
      id: 10,
      title: "Oppenheimer",
      imageUrl: "/movie-poster-oppenheimer.jpg",
      rating: 5,
      ageRating: "16",
      genres: ["DRAMA", "HISTÓRICO", "SUSPENSE"],
    },
  ];

  return (
    <>
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <GenreFilter activeGenre={activeGenre} onGenreChange={setActiveGenre} />

      <MovieSection
        title="VOCÊ PODE GOSTAR"
        movies={movies.filter((movie) => activeGenre === "all" || movie.genres.includes(activeGenre))}
      />

      <MovieSection
        title="ÚLTIMOS LANÇAMENTOS"
        movies={movies.filter((movie) => activeGenre === "all" || movie.genres.includes(activeGenre))}
      />

      <MovieSection title="COMÉDIA" movies={movies.filter((movie) => movie.genres.includes("COMÉDIA"))} />

      <MovieSection title="AÇÃO" movies={movies.filter((movie) => movie.genres.includes("AÇÃO"))} />
    </>
    //
    // <MovieSection
    //   title="VOCÊ PODE GOSTAR"
    //   movies={movies.filter(movie => activeGenre === 'all' || movie.genres.includes(activeGenre))}
    // />
    //
    // <MovieSection
    //   title="ÚLTIMOS LANÇAMENTOS"
    //   movies={movies.filter(movie => activeGenre === 'all' || movie.genres.includes(activeGenre))}
    // />
    //
    // <MovieSection
    //   title="COMÉDIA"
    //   movies={movies.filter(movie => movie.genres.includes('COMÉDIA'))}
    // />
    //
    // <MovieSection
    //   title="AÇÃO"
    //   movies={movies.filter(movie => movie.genres.includes('AÇÃO'))}
    // />
  );
};
