import { useState } from "react";
import "../styles/Navbar.css";
import { planetData } from "../planetData";

interface NavbarProps {
	planets: typeof planetData;
	onPlanetSelect: (planet: string) => void;
}

function Navbar({ onPlanetSelect }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);

		if (!isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	};

	return (
		<nav className="navbar">
			<img
				className="logo"
				src="/images/black-hole.png"
				alt="an image of a black hole"
			/>
			<div className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
				<div className="navbar-menu-items">
					{planetData.map((planet) => (
						<div
							className="navbar-menu-item"
							key={planet.name}
							onClick={() => {
								onPlanetSelect(planet.name);
								toggleMenu();
							}}
						>
							{planet.name}
						</div>
					))}
				</div>
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
