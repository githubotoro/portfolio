import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import Miscellaneous from "./components/Miscellaneous";
import Current from "./components/Current";

import Hr from "./components/Hr";

const App = () => {
	return (
		<div className="p-0 sm:p-1 font-serif">
			<Hr />
			<Header />
			<Hr />
			<Current />
			<Hr />
			<Projects />
			<Hr />
			<Publications />
			<Hr />
			<Contact />
			<Hr />
		</div>
	);
};

export default App;
