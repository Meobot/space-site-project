import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planetData } from "./planetData";
import "./styles/App.css";

function App() {
	const [activePlanet, setActivePlanet] = useState("");

	const handlePlanetSelect = (planet: string) => {
		setActivePlanet(planet);
	};

	const getPlanetDescription = (planet: string) => {
		const planetInfo = planetData.find(
			(planetInfo) => planetInfo.name === planet
		);

		return planetInfo?.overview.content || "";
	};

	const getPlanetSpecs = (planet: string) => {
		const planetInfo = planetData.find(
			(planetInfo) => planetInfo.name === planet
		);

		if (!planetInfo) {
			return null;
		}

		return {
			rotationTime: planetInfo.rotation,
			revolutionTime: planetInfo.revolution,
			radius: planetInfo.radius,
			averageTemp: planetInfo.temperature,
		};
	};

	return (
		<div className="App">
			<Navbar planets={planetData} onPlanetSelect={handlePlanetSelect} />
			{activePlanet ? (
				<PlanetCard
					planet={activePlanet}
					planetDescription={getPlanetDescription(activePlanet)}
					planetSpecs={getPlanetSpecs(activePlanet)}
				/>
			) : (
				<Home />
			)}
		</div>
	);
}

export default App;
