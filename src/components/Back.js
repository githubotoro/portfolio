const Back = (backLink) => {
	return (
		<>
			<span className="italic font-semibold text-md">
				<span className="font-bold">{">>"}</span>&nbsp;
				<a href={backLink} rel="noreferrer" target="_self">
					Go Back
				</a>
			</span>
		</>
	);
};

export default Back;
