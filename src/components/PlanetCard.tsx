import { useState } from "react";
import "../styles/PlanetCard.css";
import PlanetModes from "./PlanetModes";
import PlanetSpecs from "./PlanetSpecs";

interface PlanetCardProps {
	planet: string;
	planetDescription: string;
}

function PlanetCard(props: PlanetCardProps) {
	const planetFileName: string = props.planet.toLowerCase();
	const planetDisplayName: string = props.planet;
	const [activeMode, setActiveMode] = useState("overview");

	let imageSrc = `/images/planet-${planetFileName}.svg`;
	const geologyImage = `/images/geology-${planetFileName}.png`;

	if (activeMode === "internal") {
		imageSrc = `/images/planet-${planetFileName}-internal.svg`;
	}

	const handlePlanetModeSelect = (mode: string) => {
		setActiveMode(mode.toLowerCase());
	};

	return (
		<div className="planet-card">
			<PlanetModes handlePlanetModeSelect={handlePlanetModeSelect} />
			<div className="planet-image-container">
				<img
					className="planet-card-image"
					src={imageSrc}
					alt={`an image of ${planetFileName}`}
				/>
			</div>
			{geologyImage && activeMode === "geology" && (
				<img
					className="planet-card-geology-image"
					src={geologyImage}
					alt={`an image of ${planetFileName}'s geology`}
				/>
			)}

			<div className="planet-card-info">
				<h2 className="planet-card-name">{planetDisplayName}</h2>
				<p className="planet-card-description">
					{props.planetDescription}
				</p>
				<div className="planet-card-link-container">
					Source:
					<a
						className="planet-card-link"
						href={`https://en.wikipedia.org/wiki/${planetDisplayName}`}
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						Wikipedia
					</a>
				</div>
				<PlanetSpecs
					planetSpecs={props.planetSpecs}
				/>
			</div>
		</div>
	);
}

export default PlanetCard;
