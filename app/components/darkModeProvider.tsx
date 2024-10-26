"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

interface DarkModeContextType {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

interface DarkModeProviderProps {
	children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const storedMode = localStorage.getItem("darkMode");
		if (storedMode === "true") {
			document.documentElement.classList.add("dark");
			setDarkMode(true);
		}
	}, []);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => {
			const newMode = !prevMode;
			if (newMode) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("darkMode", "true");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("darkMode", "false");
			}
			return newMode;
		});
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
}
