import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Planets from "./components/Planets";
import Phenomena from "./components/Phenomena";

function App() {
	const [activeComponent, setActiveComponent] = useState<string>("Home");

	const handleLinkClick = (component: string) => {
		setActiveComponent(component);
	};

	let content;
	if (activeComponent === "Home") {
		content = <Home />;
	} else if (activeComponent === "Planets") {
		content = <Planets />;
	} else if (activeComponent === "Phenomena") {
		content = <Phenomena />;
	}

	return (
		<div className="App">
			<Navbar onLinkClick={handleLinkClick} />
			{content}
		</div>
	);
}

export default App;