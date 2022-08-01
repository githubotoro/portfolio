import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import Miscellaneous from "./components/Miscellaneous";
import Current from "./components/Current";

import Dambnft from "./pages/publications/Dambnft";
import Scstnft from "./pages/publications/Scstnft";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hr from "./components/Hr";

const App = () => {
	const MainApp = () => {
		return (
			<>
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
			</>
		);
	};

	return (
		<div className="p-0 sm:p-1 font-serif">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<MainApp />
							</>
						}
					/>
					<Route
						path="/dambnft.html"
						element={
							<>
								<Dambnft />
							</>
						}
					/>
					<Route
						path="/scstnft.html"
						element={
							<>
								<Scstnft />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
