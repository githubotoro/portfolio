import A from "./A";

const Current = () => {
	return (
		<>
			<div className="text-xl sm:text-2xl">
				👉 I am currently building&nbsp;
				<span className="font-bold">
					{A(`Formsify`, `https://formsify.vercel.app/`)}
				</span>
				&nbsp;which helps in creating{" "}
				<span className="font-bold">decentralized</span>,{" "}
				<span className="font-bold">trustless</span> &{" "}
				<span className="font-bold">distributed</span>&nbsp;Forms. 📋
			</div>
		</>
	);
};

export default Current;
