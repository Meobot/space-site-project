function PlanetCard({ planet }) {

	console.log(planet);
	return (
		<div className="planet-card">
			<div className="planet-card-image">
				<img
					src={`/images/planet-${planet}.svg`}
					alt={`an image of ${planet}`}
				/>

				<div className="planet-card-image-orbit">
					<img src="/images/orbit.png" alt="an image of an orbit" />
				</div>
			</div>
		</div>
	);
}

export default PlanetCard;
