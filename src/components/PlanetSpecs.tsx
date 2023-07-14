import "../styles/PlanetSpecs.css"

interface PlanetSpecsProps {
	planetSpecs: {
		rotationTime: string;
		revolutionTime: string;
		radius: string;
		averageTemp: string;
	}
}

function PlanetSpecs({ planetSpecs }: PlanetSpecsProps) {
	console.log(planetSpecs)
	return (
		<div className="planet-specs">
			<div className="planet-spec">
				<h3 className="planet-spec-name">Rotation Time</h3>
				<p className="planet-spec-value">{planetSpecs.rotationTime}</p>
			</div>
			<div className="planet-spec">
				<h3 className="planet-spec-name">Revolution Time</h3>
				<p className="planet-spec-value">{planetSpecs.revolutionTime}</p>
			</div>
			<div className="planet-spec">
				<h3 className="planet-spec-name">Radius</h3>
				<p className="planet-spec-value">{planetSpecs.radius}</p>
			</div>
			<div className="planet-spec">
				<h3 className="planet-spec-name">Average Temp.</h3>
				<p className="planet-spec-value">{planetSpecs.averageTemp}</p>
			</div>
		</div>
	)
}

export default PlanetSpecs