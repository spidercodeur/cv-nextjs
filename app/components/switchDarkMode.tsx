"use client";
import { useDarkMode } from "./darkModeProvider";
import { Icons } from "./icons";

export default function SwitcheDarkMode() {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<nav className="hidden right-0 items-center xl:block xl:fixed p-4 print:hidden">
			<button onClick={toggleDarkMode}>
				{darkMode ? <Icons.lightIcon /> : <Icons.darkIcon />}
			</button>
		</nav>
	);
}
