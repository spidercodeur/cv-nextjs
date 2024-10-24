"use client";
import Link from "next/link";

const DownloadPdf = () => {
	return (
		<Link
			href="/CV-developpeur.pdf"
			target="_blank"
			className="active:bg-blue-700 bg-primary duration-150 ease-in-out focus:border-blue-700 focus:outline-none focus:shadow-outline-blue hover:bg-purple-600 inline-flex items-center justify-center print:hidden py-2 rounded text-base text-white transition w-full"
		>
			Télécharger
		</Link>
	);
};
export default DownloadPdf;
