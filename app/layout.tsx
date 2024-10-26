import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./components/darkModeProvider";
const roboto_mono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "CV Developpeur nextjs Nantes, gestion de projet web",
	description:
		"CV Eddy Szydlowiski - Developpeur Nextjs Nantes, gestion de projet web, application web",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<DarkModeProvider>
			<html lang="fr">
				<body
					className={`${roboto_mono.className} antialiased transition duration-500 bg-slate-50 dark:bg-slate-800`}
				>
					{children}
				</body>
			</html>
		</DarkModeProvider>
	);
}
