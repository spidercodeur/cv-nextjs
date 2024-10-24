import Link from "next/link";
import { Icons } from "./icons";
import PrintButton from "./printButton";
import profil from "/public/images/profil-webmaster-nantes.jpg";
import Image from "next/image";

const About = () => {
	return (
		<div className="md:w-1/3 p-2 relative flex justify-center">
			<div className="md:fixed md:mt-32  items-center">
				<div className=" text-center ">
					<div className="h-40 w-40 m-auto  grayscale hover:grayscale-30">
						<Image
							src={profil}
							alt="profil"
							className="rounded-full"
						/>
					</div>

					<div className="mb-12 mt-4 justify-center items-center">
						<div className="text-xl text-gray-800 dark:text-white font-bold">
							Eddy SZYDLOWISKI
						</div>
						<h1 className="md:text-sm text-gray-600 dark:text-gray-200">
							Gestion de projet web,
							<br />
							Développeur
						</h1>
					</div>
				</div>
				<div className="mx-4 my-4 ">
					<div className="my-2 text-lg text-gray-600 dark:text-gray-200 flex items-center">
						<div className="mr-2">
							<Icons.mail className="dark:fill-gray-200" />
						</div>
						eddy.szy@gmail.com
					</div>
					<div className="my-2 text-lg text-gray-600 dark:text-gray-200 flex items-center">
						<div className="mr-2">
							<Icons.mobile className="dark:fill-gray-200" />
						</div>
						<Link
							href="tel:+33761491162"
							title="telelphone"
						>
							07.61.49.11.62
						</Link>
					</div>
					<div className="my-2 text-lg text-gray-600 dark:text-gray-200 flex items-center">
						<div className="mr-2">
							<Icons.location className="dark:fill-gray-200" />
						</div>
						Nantes 44
					</div>
					<a
						href="https://www.linkedin.com/in/eddy-szydlowiski-7a967a91/"
						className="my-2 dark:text-gray-200 text-lg text-gray-600 flex print:hidden items-center"
					>
						<div className="mr-2">
							<Icons.LinkedIn className="dark:fill-gray-200" />
						</div>
						LinkedIn
					</a>
					<PrintButton />
				</div>
			</div>
		</div>
	);
};

export default About;
