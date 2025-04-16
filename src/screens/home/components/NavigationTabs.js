// components/NavigationTabs.jsx
const NavigationTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "filmes", label: "Filmes" },
    { id: "forum", label: "Fórum" },
  ];

  return (
    <div className="navigation-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
