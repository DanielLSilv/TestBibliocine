// App.jsx
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./components/sidebar/sidebar.css";
import "./App.css";
import { HomePage } from "./screens/home/Home";

// Page components
const FavoritesPage = () => (
  <div className="page">
    <h1>Favoritos</h1>
    <p>Seus filmes favoritos aparecem aqui.</p>
  </div>
);
const WatchedPage = () => (
  <div className="page">
    <h1>Já Assistidos</h1>
    <p>Filmes que você já assistiu.</p>
  </div>
);
const WatchlistPage = () => (
  <div className="page">
    <h1>Quero Assistir</h1>
    <p>Filmes para assistir no futuro.</p>
  </div>
);
const NewReleasesPage = () => (
  <div className="page">
    <h1>Lançamentos</h1>
    <p>Novos lançamentos disponíveis.</p>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState("home");

  // Render current page based on state
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "favorites":
        return <FavoritesPage />;
      case "watched":
        return <WatchedPage />;
      case "watchlist":
        return <WatchlistPage />;
      case "releases":
        return <NewReleasesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Sidebar onNavigate={setActivePage} activePage={activePage} />
      <div className="main-content">{renderPage()}</div>
    </div>
  );
};

export default App;
