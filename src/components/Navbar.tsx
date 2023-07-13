import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { planetData } from "../planetData";
import { phenomenaData } from "../phenomenaData";

function Navbar(props: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [menuItems, setMenuItems] = useState([
		"Home",
		"Planets",
		"Phenomena",
	]);
	const [initialMenuItems, setInitialMenuItems] = useState([
		"Home",
		"Planets",
		"Phenomena",
	]);
	const [showGoBack, setShowGoBack] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handlePlanetClick = (planet: string) => {
		props.onPlanetSelect(planet);
	};

	const handleCategoryClick = (category: string) => {
		if (category === "Planets") {
			const planets = planetData.map((planet) => (
				<span
					className=""
					key={planet.id}
					onClick={() => {
						handlePlanetClick(planet.name);
					}}
				>
					{planet.name}
				</span>
			));
			setMenuItems(planets);
			setShowGoBack(true);
		} else if (category === "Phenomena") {
			const phenomena = phenomenaData.map(
				(phenomenon) => phenomenon.name
			);
			setMenuItems(phenomena);
			setShowGoBack(true);
		} else {
			setMenuItems(initialMenuItems);
			setShowGoBack(false);
		}
	};

	const handleGoBack = () => {
		setMenuItems(initialMenuItems);
		setShowGoBack(false);
	};

	return (
		<nav className="navbar">
			<img
				className="logo"
				src="/images/black-hole.png"
				alt="an image of a black hole"
			/>
			<div className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
				{showGoBack && (
					<div className="navbar-item go-back" onClick={handleGoBack}>
						Go Back
					</div>
				)}

				{menuItems.map((item) => (
					<div
						className="navbar-item"
						key={item}
						onClick={() => {
							handleCategoryClick(item);
						}}
					>
						{item}
					</div>
				))}
				<div className="navbar-close" onClick={toggleMenu}>
					<span>&times;</span>
				</div>
			</div>
			<button className="navbar-toggle" onClick={toggleMenu}>
				<img
					className="navbar-toggle-icon"
					src="/images/menu-icon.png"
					alt="menu icon"
				/>
			</button>
		</nav>
	);
}

export default Navbar;
