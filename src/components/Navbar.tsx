import { useState } from "react";
import "../styles/Navbar.css";
interface NavbarProps {
	onLinkClick: (component: string) => void;
}

function Navbar(props: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("Home");

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = (component: string) => {
		setActiveLink(component);
		props.onLinkClick(component);
		console.log(component);
	};

	return (
		<nav className="navbar">
			<img
				className="logo"
				src="/images/black-hole.png"
				alt="an image of a black hole"
			/>
			<div className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
				<a
					href="#"
					className={`navbar-item ${
						activeLink === "Home" ? "active" : ""
					}`}
					onClick={() => handleLinkClick("Home")}
				>
					Home
				</a>
				<a
					href="#"
					className={`navbar-item ${
						activeLink === "Planets" ? "active" : ""
					}`}
					onClick={() => handleLinkClick("Planets")}
				>
					Planets
				</a>
				<a
					href="#"
					className={`navbar-item ${
						activeLink === "Phenomena" ? "active" : ""
					}`}
					onClick={() => handleLinkClick("Phenomena")}
				>
					Phenomena
				</a>
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
