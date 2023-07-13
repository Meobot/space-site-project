

function PlanetCard(props) {
  return (
	<div className="planet-card">
		<img src={`/images/${props.planet}.png`} alt={`an image of ${props.planet}`} />
		<h2>{props.planet}</h2>
	</div>
  )
}

export default PlanetCard