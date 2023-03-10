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
	return (
		<div className="flex flex-col items-center place-content-center min-h-screen bg-gray-50 p-0 m-0">
			<div
				className="flex flex-col relative items-center font-semibold font-mono text-2xl bg-blue-500 text-gray-50 rounded-xl py-1 px-3
			shadow-sm shadow-gray-300"
			>
				Upgrading to NextJS 13 -- will be back soon.
				<div
					className="z-20 absolute w-4 h-4 bg-green-500 top-0 right-0 -mt-1 -mr-1 rounded-full 
				"
				/>
				<div
					className="z-10 absolute w-4 h-4 bg-green-500 top-0 right-0 -mt-1 -mr-1 rounded-full animate-ping
				"
				/>
			</div>
		</div>
	);
};

export default App;
