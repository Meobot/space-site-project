import { useState } from "react";
import Navbar from "./components/Navbar";
import PlanetCard from "./components/PlanetCard";
import { planetData } from "./planetData";
import "./styles/App.css";

function App() {
	const [activePlanet, setActivePlanet] = useState("Earth");

	const handlePlanetSelect = (planet: string) => {
		setActivePlanet(planet);
	};

	const getPlanetOverview = (planet: string) => {
		const planetInfo = planetData.find(
			(planetInfo) => planetInfo.name === planet
		);

		return planetInfo?.overview.content || "";
	};

	const getPlanetInternal = (planet: string) => {
		const planetInfo = planetData.find(
			(planetInfo) => planetInfo.name === planet
		);

		return planetInfo?.structure.content || "";
	};

	const getPlanetGeology = (planet: string) => {
		const planetInfo = planetData.find(
			(planetInfo) => planetInfo.name === planet
		);

		return planetInfo?.geology.content || "";
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
			<PlanetCard
				planet={activePlanet}
				planetOverview={getPlanetOverview(activePlanet)}
				planetInternal={getPlanetInternal(activePlanet)}
				planetGeology={getPlanetGeology(activePlanet)}
				planetSpecs={getPlanetSpecs(activePlanet)}
			/>
		</div>
	);
}

export default App;
