import A from "../../components/A";
import Hr from "../../components/Hr";
import Back from "../../components/Back";

const Dambnft = () => {
	const dambnft = {
		title: `DAMBNFT: Document Authentication Model through Blockchain and Non-fungible Tokens`,
		emoji: `📋`,
		doi: `10.1007/978-981-16-9967-2_33`,
		doiLink: `http://dx.doi.org/10.1007/978-981-16-9967-2_33`,
		book: `Smart Trends in Computing and Communications, Proceedings of SmartCom 2022`,
		series: `Lecture Notes in Networks and Systems (LNNS, volume 396)`,
		abstract: `Hard copies of documents can easily be forged, resulting in the decrease of credibility of issuing institutions and unfair use of forged documents by certain individuals as well. The model that we propose aims to authenticate documents through the use of blockchain technology, non-fungible tokens, and interplanetary file system. When a document is stored on the blockchain, a non-fungible token is created, which contains the unique address of the issuing institution and the hash of the document itself. The ownership of this token is then transferred to the document holder by the corresponding issuing authority. In this way, when someone wants to verify the authenticity of the document, they can use the address mentioned in the token to trace back the creator. If the document’s hash differs from the one stored in the token, we know that the document has been altered. Even when unauthorized users are successful in adding the forged documents to the blockchain, they will not have the same unique signature as that of the authorized institution. The proposed model allows autonomous authentication of documents using public blockchain technology.`,
		keywords: [
			`Non-Fungible Token (NFT)`,
			`Blockchain Technology`,
			`Interplanetary File System`,
			`Smart Contracts`,
			`Document Forgery`,
		],
		citation: `Khokhariya, U., Shah, K., Pancholi, N., Kumar, S. (2023). DAMBNFT: Document Authentication Model through Blockchain and Non-fungible Tokens. In: Zhang, YD., Senjyu, T., So-In, C., Joshi, A. (eds) Smart Trends in Computing and Communications. Lecture Notes in Networks and Systems, vol 396. Springer, Singapore. https://doi.org/10.1007/978-981-16-9967-2_33`,
		published: `6th July 2022`,
		publishor: `Springer, Singapore`,
	};

	return (
		<>
			<Hr />

			<div className="text-lg sm:text-2xl font-bold">
				👉&nbsp;{dambnft.title}&nbsp;{dambnft.emoji}
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1">
				📌 DOI:&nbsp;
				{A(dambnft.doi, dambnft.doiLink)}
				<br />
				📘 Book:
				<span className="font-normal">{dambnft.book}</span>
				<br />
				📚 Series:
				<span className="font-normal">{dambnft.series}</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1">
				<span className="font-bold">🔎 Keywords:</span>
				<span className="font-normal">
					{dambnft.keywords[0]},&nbsp;{dambnft.keywords[1]},&nbsp;
					{dambnft.keywords[2]},&nbsp;{dambnft.keywords[3]},&nbsp;
					{dambnft.keywords[4]}
				</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1 text-justify">
				<span className="font-bold">📓 Abstract:</span>
				<span className="font-normal">{dambnft.abstract}</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1 text-justify">
				<span className="font-bold">📑 Citation:</span>
				<span className="font-normal">{dambnft.citation}</span>
			</div>

			<Hr />

			<div className="text-md sm:text-xl font-bold space-x-1">
				📅 Published:&nbsp;
				<span className="font-normal">{dambnft.published}</span>
				<br />
				📁 Publishor:
				<span className="font-normal">{dambnft.publishor}</span>
			</div>

			<Hr />

			<div className="flex text-md sm:text-xl font-bold space-x-1 justify-end">
				{Back(`/`)}
			</div>
			<Hr />
		</>
	);
};

export default Dambnft;
