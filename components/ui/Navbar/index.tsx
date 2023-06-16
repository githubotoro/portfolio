export const Navbar = () => {
	return (
		<div className="sticky top-0 z-40 w-full h-12 items-center flex flex-col bg-isWhite bg-opacity-10 backdrop-blur-sm ">
			<div className="absolute w-full h-full max-w-sm sm:max-w-sm md:max-w-3xl p-2 flex flex-row justify-between items-center">
				<div className="w-8 h-8 bg-isRedDark"></div>
				<div className="w-8 h-8 bg-isRedDark"></div>
				<div className="w-8 h-8 bg-isRedDark"></div>
			</div>
		</div>
	);
};
