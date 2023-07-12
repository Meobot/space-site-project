import { useState } from "react";
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

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleCategoryClick = (category: string) => {
		if (category === "Planets") {
			const planets = planetData.map((planet) => planet.name);
			setMenuItems(planets);
		} else if (category === "Phenomena") {
			const phenomena = phenomenaData.map((phenomenon) => phenomenon.name);
			setMenuItems(phenomena);
		} else {
			setMenuItems(initialMenuItems);
		}
	}

	return (
		<nav className="navbar">
			<img
				className="logo"
				src="/images/black-hole.png"
				alt="an image of a black hole"
			/>
			<div className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
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
