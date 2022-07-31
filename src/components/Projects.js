import A from "./A";

const Projects = () => {
	const projectsList = {
		cryptoChai: {
			title: `Crypto Chai`,
			subtitle: `Your decentralized 'Chai Ki Tapri'`,
			emoji: `☕`,
			links: {
				github: {
					smartContract: `https://github.com/githubotoro/crypto-chai-smart-contract`,
					web3App: `https://github.com/githubotoro/crypto-chai-web3-app`,
				},
				deployment: {
					productHunt: `https://www.producthunt.com/products/crypto-chai`,
					website: `https://crypto-chai.vercel.app/`,
					polygonScan: `https://mumbai.polygonscan.com/address/0x70856254B2bEc0c6B0a591554bbbbea7b40389EB#code`,
				},
			},
		},
		laxmiCryptFund: {
			title: `Laxmi Crypt Fund`,
			subtitle: `21 sec mein Crypto Double`,
			emoji: `💸`,
			links: {
				github: {
					smartContract: `https://github.com/githubotoro/laxmi-crypt-fund-smart-contract`,
					web3App: `https://github.com/githubotoro/laxmi-crypt-fund-web3-app`,
				},
				deployment: {
					productHunt: `https://www.producthunt.com/products/laxmi-crypt-fund`,
					website: `https://laxmi-crypt-fund.vercel.app/`,
					polygonScan: `https://mumbai.polygonscan.com/address/0x085d174c046DfdeAE987D27fF5446D31A570D6AA#code`,
				},
			},
		},
		totorulla: {},
		formsify: {
			title: `Formsify`,
			subtitle: `Empowering Web3 Forms`,
			emoji: `📝`,
			links: {
				github: {
					smartContract: ``,
					web3App: ``,
				},
				deployment: {
					productHunt: ``,
					website: `https://formsify.vercel.app/`,
					polygonScan: ``,
				},
			},
		},
		megacryption: {
			title: `MegaCryption`,
			subtitle: `Universal Encoder Decoder`,
			emoji: `🔐`,
			links: {
				github: {
					webApp: `https://github.com/githubotoro/megacryption`,
				},
				deployment: {
					website: `https://megacryption.vercel.app/`,
				},
			},
		},
		osvis: {
			title: `OSVIS`,
			subtitle: `Operating System Visualizations`,
			emoji: `🔎`,
			links: {
				github: {
					webApp: `https://github.com/githubotoro/osvis`,
				},
				deployment: {
					website: `https://osvis.vercel.app/`,
				},
			},
		},
	};

	const CryptoChai = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{projectsList.cryptoChai.title} -{" "}
						<span className="font-normal">
							{projectsList.cryptoChai.subtitle}{" "}
							{projectsList.cryptoChai.emoji}
						</span>
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						🔗:&nbsp;
						{A(
							`Product Hunt`,
							projectsList.cryptoChai.links.deployment.productHunt
						)}
						&nbsp;|&nbsp;
						{A(
							`Website`,
							projectsList.cryptoChai.links.deployment.website
						)}
						&nbsp;|&nbsp;
						{A(
							`PolygonScan`,
							projectsList.cryptoChai.links.deployment.polygonScan
						)}
					</div>
					<div className="text-md sm:text-xl font-bold">
						💻:&nbsp;
						{A(
							`Smart Contract`,
							projectsList.cryptoChai.links.github.smartContract
						)}{" "}
						&nbsp;|&nbsp;
						{A(
							`Web3 App`,
							projectsList.cryptoChai.links.github.web3App
						)}
					</div>
				</div>
			</>
		);
	};

	const LaxmiCryptFund = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{projectsList.laxmiCryptFund.title} -{" "}
						<span className="font-normal">
							{projectsList.laxmiCryptFund.subtitle}{" "}
							{projectsList.laxmiCryptFund.emoji}
						</span>
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						🔗:&nbsp;
						{A(
							`Product Hunt`,
							projectsList.laxmiCryptFund.links.deployment
								.productHunt
						)}
						&nbsp;|&nbsp;
						{A(
							`Website`,
							projectsList.laxmiCryptFund.links.deployment.website
						)}
						&nbsp;|&nbsp;
						{A(
							`PolygonScan`,
							projectsList.laxmiCryptFund.links.deployment
								.polygonScan
						)}
					</div>
					<div className="text-md sm:text-xl font-bold">
						💻:&nbsp;
						{A(
							`Smart Contract`,
							projectsList.laxmiCryptFund.links.github
								.smartContract
						)}{" "}
						&nbsp;|&nbsp;
						{A(
							`Web3 App`,
							projectsList.laxmiCryptFund.links.github.web3App
						)}
					</div>
				</div>
			</>
		);
	};

	const Formsify = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{projectsList.formsify.title} -{" "}
						<span className="font-normal">
							{projectsList.formsify.subtitle}{" "}
							{projectsList.formsify.emoji}
						</span>
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						(CURRENTLY UNDER DEVELOPMENT)
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						🔗:&nbsp;
						{A(
							`Website`,
							projectsList.formsify.links.deployment.website
						)}
					</div>

					<div className="text-md sm:text-xl font-bold">
						💻:&nbsp;
						{A(
							`Web3 App`,
							projectsList.formsify.links.github.web3App
						)}
					</div>
				</div>
			</>
		);
	};

	const MegaCryption = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{projectsList.megacryption.title} -{" "}
						<span className="font-normal">
							{projectsList.megacryption.subtitle}{" "}
							{projectsList.megacryption.emoji}
						</span>
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						🔗:&nbsp;
						{A(
							`Website`,
							projectsList.megacryption.links.deployment.website
						)}
						&nbsp;|&nbsp;
						{A(
							`GitHub`,
							projectsList.megacryption.links.github.webApp
						)}
					</div>
				</div>
			</>
		);
	};

	const Osvis = () => {
		return (
			<>
				<div className="space-y-1">
					<div className="text-lg sm:text-2xl font-bold">
						{projectsList.osvis.title} -{" "}
						<span className="font-normal">
							{projectsList.osvis.subtitle}{" "}
							{projectsList.osvis.emoji}
						</span>
					</div>

					<div className="text-md sm:text-xl font-bold space-x-1">
						🔗:&nbsp;
						{A(
							`Website`,
							projectsList.osvis.links.deployment.website
						)}
						&nbsp;|&nbsp;
						{A(`GitHub`, projectsList.osvis.links.github.webApp)}
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="text-2xl sm:text-3xl font-bold">Ships 🚢</div>
			<ul className="space-y-5">
				<li>{CryptoChai()}</li>
				<li>{LaxmiCryptFund()}</li>
				<li>{MegaCryption()}</li>
				<li>{Osvis()}</li>
			</ul>
		</>
	);
};

export default Projects;
