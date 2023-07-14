import "../styles/PlanetModes.css";

function PlanetModes({ handlePlanetModeSelect }: PlanetModesProps) {

	const modes = ["Overview", "Internal", "Geology"];

	return (
		<div className="planet-modes">
			{modes.map((mode) => (
				<div
					className="planet-mode"
					key={mode}
					onClick={() => handlePlanetModeSelect(mode)}
				>
					{mode}
				</div>
			))}
		</div>
	);
}

export default PlanetModes;
