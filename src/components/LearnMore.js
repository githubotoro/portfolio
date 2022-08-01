const LearnMore = (navLink) => {
	return (
		<>
			<span className="italic font-semibold text-md">
				<span className="font-bold">{">>"}</span>&nbsp;
				<a href={navLink} rel="noreferrer" target="_self">
					Learn More...
				</a>
			</span>
		</>
	);
};

export default LearnMore;
