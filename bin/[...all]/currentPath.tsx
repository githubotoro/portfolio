"use client";

import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const CurrentPath = () => {
	const pathname = usePathname();
	const params = useParams();
	const router = useRouter();

	return (
		<>
			<div>hello</div>
		</>
	);
};
