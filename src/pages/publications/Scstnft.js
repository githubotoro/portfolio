import A from "../../components/A";
import Hr from "../../components/Hr";
import Back from "../../components/Back";

const Scstnft = () => {
	const scstnft = {
		title: `Securing Cookies/Sessions Through Non-Fungible Tokens`,
		emoji: `🍪`,
		doi: `10.1007/978-3-031-11217-1_10`,
		doiLink: `http://dx.doi.org/10.1007/978-3-031-11217-1_10`,
		book: `Database Systems for Advanced Applications, DASFAA 2022 International Workshops`,
		series: `Lecture Notes in Computer Science (LNCS, volume 13248)`,
		abstract: `Cookies are used as authentication tokens after successfully validating users by web applications. As they are stored on the client’s side, it makes them vulnerable to hijacking, stealing, and unauthorized distribution. There are methods in the literature that are developed to protect cookies. However, cookie stealing and impersonating is still a widely adopted practice. Session cookies are used so that the user does not have to log in again and again. When an attacker accesses these cookies, he/she can join the user’s active session as well; this phenomenon is called cookie hijacking. Here, we are proposing a model using the concept of blockchain, non-fungible tokens and smart contracts, which prevent the attacker from performing unauthorized tasks even when an individual gets access to the user’s session cookies. The web server uses the unique identification address of the user to generate a session ticket which would represent the ownership of the verified user. Whenever, a request is made, it gets authenticated by the blockchain; thereby making the cookie verification decentralized. This method ultimately aims to prevent unauthorized users from performing tasks through a user’s active session, which will decrease identity stealing and imitation through cookies.`,
		keywords: [
			`Non-Fungible Token (NFT)`,
			`Cookies`,
			`Session Hijacking`,
			`Blockchain`,
			`Smart Contracts`,
		],
		citation: `Shah, K., Khokhariya, U., Pancholi, N., Kumar, S., Parmar, K. (2022). Securing Cookies/Sessions Through Non-fungible Tokens. In: Rage, U.K., Goyal, V., Reddy, P.K. (eds) Database Systems for Advanced Applications. DASFAA 2022 International Workshops. DASFAA 2022. Lecture Notes in Computer Science, vol 13248. Springer, Cham. https://doi.org/10.1007/978-3-031-11217-1_10`,
		published: `16th July 2022`,
		publishor: `Springer, Cham`,
	};

	return (
		<>
			<Hr />

			<div className="text-lg sm:text-2xl font-bold">
				👉&nbsp;{scstnft.title}&nbsp;{scstnft.emoji}
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1">
				📌 DOI:&nbsp;
				{A(scstnft.doi, scstnft.doiLink)}
				<br />
				📘 Book:
				<span className="font-normal">{scstnft.book}</span>
				<br />
				📚 Series:
				<span className="font-normal">{scstnft.series}</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1">
				<span className="font-bold">🔎 Keywords:</span>
				<span className="font-normal">
					{scstnft.keywords[0]},&nbsp;{scstnft.keywords[1]},&nbsp;
					{scstnft.keywords[2]},&nbsp;{scstnft.keywords[3]},&nbsp;
					{scstnft.keywords[4]}
				</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1 text-justify">
				<span className="font-bold">📓 Abstract:</span>
				<span className="font-normal">{scstnft.abstract}</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1 text-justify">
				<span className="font-bold">📑 Citation:</span>
				<span className="font-normal">{scstnft.citation}</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1">
				📅 Published:&nbsp;
				<span className="font-normal">{scstnft.published}</span>
				<br />
				📁 Publishor:
				<span className="font-normal">{scstnft.publishor}</span>
			</div>

			<Hr />

			<div className="flex text-md sm:text-xl font-bold space-x-1 justify-end">
				{Back(`/`)}
			</div>
			<Hr />
		</>
	);
};

export default Scstnft;
