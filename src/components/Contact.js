import A from "./A";

const Contact = () => {
	const contactUrls = {
		twitter: `https://twitter.com/yupuday`,
		linkedIn: `https://www.linkedin.com/in/yupuday/`,
		email: `mailto: uday.khokhariya@gmail.com`,
	};

	return (
		<>
			<div className="text-2xl sm:text-3xl font-bold">Contact 👋</div>
			<div className="text-md sm:text-xl font-bold mt-3 ml-6">
				📧: {A(`uday.khokhariya@gmail.com`, contactUrls.email)}
				<br />
				☎️:&nbsp;
				{A(`Twitter`, contactUrls.twitter)} &nbsp;|&nbsp;
				{A(`LinkedIn`, contactUrls.linkedIn)}
			</div>
		</>
	);
};

export default Contact;
