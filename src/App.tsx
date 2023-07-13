import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planetData } from "./planetData"
import "./styles/App.css";

function App() {
  const [activePlanet, setActivePlanet] = useState("");

  const handlePlanetSelect = (planet: string) => {
    setActivePlanet(planet);
	console.log(planet);
  };

  return (
    <div className="App">
      <Navbar
        categories={planetData}
        planets={planetData}
        onPlanetSelect={handlePlanetSelect}
      />
      {activePlanet ? (
        <PlanetCard planet={activePlanet} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;