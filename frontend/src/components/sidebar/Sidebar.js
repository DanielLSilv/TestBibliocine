// Sidebar.jsx
import { useState } from "react";

const Sidebar = ({ onNavigate, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { id: "home", label: "INICIO" },
    { id: "favorites", label: "FAVORITOS" },
    { id: "watched", label: "JÁ ASSISTIDOS" },
    { id: "watchlist", label: "QUERO ASSISTIR" },
    { id: "releases", label: "LANÇAMENTOS" },
  ];

  const handleMenuClick = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="mobile-menu-button">
        <button onClick={toggleMobileMenu}>Menu</button>
      </div>
      
      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="logo">BIBLIOCINE</div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`link-button ${activePage === item.id ? "active-link" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;