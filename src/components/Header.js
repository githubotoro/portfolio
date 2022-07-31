import Hr from "./Hr";
import A from "./A";

const Header = () => {
	const headerLinks = {
		eth: {
			address: `0xD5a63CCE627372481b30AE24c31a3Fb94913D5Be`,
			blockscanLink: `https://blockscan.com/address/0xD5a63CCE627372481b30AE24c31a3Fb94913D5Be`,
		},
		githubLink: `https://github.com/githubotoro`,
		lensLink: `https://www.lensfrens.xyz/yupuday.lens`,
		twitterLink: `https://twitter.com/yupuday`,
	};

	return (
		<>
			<div className="flex flex-col w-full">
				<center>
					<div className="text-3xl sm:text-4xl font-bold ">
						Uday Khokhariya
						<div className="text-xl sm:text-2xl font-semibold truncate italic max-w-xs sm:max-w-none">
							{A(
								headerLinks.eth.address,
								headerLinks.eth.blockscanLink
							)}
						</div>
						<div className="text-lg sm:text-xl font-semibold">
							{A(`GitHub`, headerLinks.githubLink)}
							&nbsp;|&nbsp;
							{A(`Twitter`, headerLinks.twitterLink)}
							&nbsp;|&nbsp;
							{A(`Lens`, headerLinks.lensLink)}
						</div>
						{/* <button
							className="text-sm sm:text-md font-bold"
							onClick={() => {
								alert(`Stay TORO!`);
							}}
						>
							#stayTORO
						</button> */}
					</div>
				</center>
			</div>
		</>
	);
};

export default Header;
