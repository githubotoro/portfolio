const A = (linkName, linkUrl) => {
	return (
		<>
			<a href={linkUrl} rel="noreferrer" target="_blank">
				{linkName}
			</a>
		</>
	);
};

export default A;
