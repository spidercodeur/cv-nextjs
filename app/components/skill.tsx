"use client";
import { useState, useEffect } from "react";

const Skill = ({
	name,
	level,
	delay = 0,
}: Readonly<{ name: string; level: number; delay?: number }>) => {
	const [animatedLevel, setAnimatedLevel] = useState(0);

	useEffect(() => {
		// Démarrer l'animation après un délai
		const timeoutId = setTimeout(() => {
			setAnimatedLevel(level); // Passe progressivement à la valeur du niveau
		}, delay);

		// Nettoyage du timeout à la fin de l'animation ou du démontage du composant
		return () => clearTimeout(timeoutId);
	}, [level, delay]);

	return (
		<>
			<div className="mb-2 text-xs dark:text-white">{name}</div>
			<div className="w-full bg-gray-200 rounded-full h-2.5 mb-3 dark:bg-gray-700">
				<div
					className="bg-gray-400 h-2.5 rounded-full dark:bg-gray-300 transition-all duration-1000 ease-out"
					style={{ width: animatedLevel + "%" }}
				></div>
			</div>
		</>
	);
};
export default Skill;
