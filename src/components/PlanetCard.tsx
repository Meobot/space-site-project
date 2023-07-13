function PlanetCard(props) {

	const planet = props.planet.toLowerCase();

	console.log(planet);
	return (
		<div className="planet-card">
			<div className="planet-card-image">
				<img
					src={`/images/planet-${planet}.svg`}
					alt={`an image of ${planet}`}
				/>

				<div className="planet-card-image-orbit">
				</div>
			</div>
		</div>
	);
}

export default PlanetCard;
