import Intro from "./components/intro";

import Experience from "./components/experience";
import Formation from "./components/formation";
import Interest from "./components/interest";
import { Competence } from "./components/competence";
import About from "./components/about";
import SwitcheDarkMode from "./components/switchDarkMode";

export default function Home() {
	return (
		<div>
			<SwitcheDarkMode />
			<div className="py-6 px-4 max-w-screen-lg print:max-w-screen-xl sm:flex mx-auto">
				<About />
				<div className="md:w-2/3 w-full md:mt-12">
					<Intro />
					<Competence />
					<Experience />
					<Formation />
					<Interest />
				</div>
			</div>
		</div>
	);
}
