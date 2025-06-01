import axios from "axios";

const TMDB_API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njk4MjE2N2M4MTYwODU3NDNkYmMxZDQwNzU0ODZmOSIsIm5iZiI6MTc0ODQ3NDA1Mi44MDYwMDAyLCJzdWIiOiI2ODM3OThjNDNiMDczMGM2M2VhODgwNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9hFeIfapl5n2RCm5e7Ruat3TSStYL0KiCD-_4bPnt2A";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const tmdbApi = axios.create({
    baseURL: TMDB_BASE_URL,
    headers: {
        Authorization: `Bearer ${TMDB_API_KEY}`,
        "Content-Type": "application/json",
    },
});

export const getImageUrl = (path) => {
    return path ? `${TMDB_IMAGE_BASE_URL}${path}` : null;
};

export const getPopularMovies = async () => {
    try {
        console.log("Iniciando busca de filmes populares...");
        const response = await tmdbApi.get("/movie/popular");
        console.log("Resposta da API:", response.data);

        if (!response.data.results) {
            console.error("Dados inválidos recebidos da API:", response.data);
            return [];
        }

        const movies = response.data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            imageUrl: getImageUrl(movie.poster_path),
            rating: Math.round(movie.vote_average / 2),
            ageRating: movie.adult ? "18" : "12",
            genres: movie.genre_ids.map((id) => {
                const genreMap = {
                    28: "AÇÃO",
                    35: "COMÉDIA",
                    18: "DRAMA",
                    27: "TERROR",
                    878: "FICÇÃO",
                    53: "SUSPENSE",
                    10749: "ROMANCE",
                    9648: "MISTÉRIO",
                    10751: "FAMÍLIA",
                    14: "FANTASIA",
                    36: "HISTÓRICO",
                    10402: "MUSICAL",
                    80: "CRIME",
                    99: "DOCUMENTÁRIO",
                    10752: "GUERRA",
                    37: "FAROESTE",
                    10770: "TV",
                    16: "ANIMAÇÃO",
                    12: "AVENTURA",
                };
                return genreMap[id] || "OUTRO";
            }),
        }));

        console.log("Filmes processados:", movies);
        return movies;
    } catch (error) {
        console.error(
            "Erro detalhado ao buscar filmes populares:",
            error.response || error
        );
        return [];
    }
};
