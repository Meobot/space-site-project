import { useState } from "react";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import {planetData} from "./planetData"
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
        <h1>Welcome to the Home page!</h1>
      )}
    </div>
  );
}

export default App;