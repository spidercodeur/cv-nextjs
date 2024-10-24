"use client";

const DownloadPdf = () => {
	return (
		<a
			download
			href="/files/cv_developpeur.pdf"
			target="_blank"
			rel="noopener noreferrer"
			className="active:bg-blue-700 bg-primary duration-150 ease-in-out focus:border-blue-700 focus:outline-none focus:shadow-outline-blue hover:bg-purple-600 inline-flex items-center justify-center print:hidden py-2 rounded text-base text-white transition w-full"
		>
			Télécharger
		</a>
	);
};
export default DownloadPdf;
