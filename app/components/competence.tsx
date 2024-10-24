import React from "react";
import Skill from "./skill";

export const Competence = () => {
	return (
		<div className="mb-8">
			{" "}
			<h2>Compétences</h2>
			<Skill
				name="HTML | CSS | Javascript | jQuery"
				level={90}
			/>
			<Skill
				name="Botstrap | Tailwind | Foundation"
				level={80}
			/>
			<Skill
				name="WordPress | Prestashop"
				level={85}
			/>
			<Skill
				name="React | Next.js | Typescript"
				level={78}
			/>
			<Skill
				name="PHP | Laravel | Symfony"
				level={60}
			/>
		</div>
	);
};
