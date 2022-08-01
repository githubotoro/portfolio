import A from "./A";
import LearnMore from "./LearnMore";

const Publications = () => {
	const publicationsList = {
		dambnft: {
			title: `DAMBNFT: Document Authentication Model through Blockchain and Non-fungible Tokens`,
			emoji: `📋`,
			doi: `10.1007/978-981-16-9967-2_33`,
			doiLink: `http://dx.doi.org/10.1007/978-981-16-9967-2_33`,
			book: `Smart Trends in Computing and Communications, Proceedings of SmartCom 2022`,
			series: `Lecture Notes in Networks and Systems (LNNS, volume 396)`,
		},
		scstnft: {
			title: `Securing Cookies/Sessions Through Non-Fungible Tokens`,
			emoji: `🍪`,
			doi: `10.1007/978-3-031-11217-1_10`,
			doiLink: `http://dx.doi.org/10.1007/978-3-031-11217-1_10`,
			book: `Database Systems for Advanced Applications, DASFAA 2022 International Workshops`,
			series: `Lecture Notes in Computer Science (LNCS, volume 13248)`,
		},
	};

	const Dambnft = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{publicationsList.dambnft.title}{" "}
						{publicationsList.dambnft.emoji}
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						📌 DOI:&nbsp;
						{A(
							publicationsList.dambnft.doi,
							publicationsList.dambnft.doiLink
						)}
						<br />
						📘 Book:
						<span className="font-normal">
							{publicationsList.dambnft.book}
						</span>
						<br />
						📚 Series:
						<span className="font-normal">
							{publicationsList.dambnft.series}
						</span>
						<br />
						{LearnMore(`dambnft.html`)}
					</div>
				</div>
			</>
		);
	};

	const Scstnft = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{publicationsList.scstnft.title}{" "}
						{publicationsList.scstnft.emoji}
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						📌 DOI:&nbsp;
						{A(
							publicationsList.scstnft.doi,
							publicationsList.scstnft.doiLink
						)}
						<br />
						📘 Book:
						<span className="font-normal">
							{publicationsList.scstnft.book}
						</span>
						<br />
						📚 Series:
						<span className="font-normal">
							{publicationsList.scstnft.series}
						</span>
						<br />
						{LearnMore(`scstnft.html`)}
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="text-2xl sm:text-3xl font-bold">
				Publications 📄
			</div>
			<ul className="space-y-5">
				<li>{Dambnft()}</li>
				<li>{Scstnft()}</li>
			</ul>
		</>
	);
};

export default Publications;
