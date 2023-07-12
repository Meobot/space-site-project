import { useState } from "react";
import "../styles/Navbar.css";

interface NavbarProps {
	onLinkClick: (component: string) => void;
}

function Navbar(props: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("Home");
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

	const handleLinkClick = (component: string) => {
		setActiveLink(component);
		props.onLinkClick(component);
		console.log(component);

		// Update menu items based on the clicked component
		if (component === "Planets") {
			setMenuItems(["Planet 1", "Planet 2", "Planet 3"]);
			setShowGoBack(true);
		} else if (component === "Phenomena") {
			setMenuItems(["Phenomenon 1", "Phenomenon 2", "Phenomenon 3"]);
			setShowGoBack(true);
		} else {
			setMenuItems(["Home", "Planets", "Phenomena"]);
			setShowGoBack(false);
		}
	};

	const handleGoBack = () => {
		setMenuItems(initialMenuItems);
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
					<div className="navbar-item" onClick={handleGoBack}>
						Go Back
					</div>
				)}
				{menuItems.map((item, index) => (
					<a
						href="#"
						key={index}
						className={`navbar-item ${
							activeLink === item ? "active" : ""
						}`}
						onClick={() => handleLinkClick(item)}
					>
						{item}
					</a>
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
