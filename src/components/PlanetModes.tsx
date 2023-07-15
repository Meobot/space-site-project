import "../styles/PlanetModes.css";

type PlanetModesProps = {
  handlePlanetModeSelect: (mode: string) => void;
}

function PlanetModes({ handlePlanetModeSelect }: PlanetModesProps) {

	const modes = ["Overview", "Internal", "Geology"];

	return (
		<div className="planet-modes">
			{modes.map((mode) => (
				<div
					className="planet-mode"
					id={mode.toLowerCase()}
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
