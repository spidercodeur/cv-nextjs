"use client";
import { Icons } from "./icons";
import { useState } from "react";

const Experience = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	return (
		<div className="mb-4 dark:text-gray-200">
			<h2>Expériences</h2>
			<div className="mb-4 text-sm ">
				<h3>Développeur Web en Agence – Gestion de Projets Web</h3>
				<ul className="list-disc ml-3 pb-4">
					<li>
						<b>Création de sites vitrines et e-commerce</b> :
						Développement de solutions sur mesure en fonction des besoins
						clients, allant de la personnalisation complète de CMS comme
						WordPress et Prestashop à l’utilisation de frameworks adaptés.
					</li>
					<li>
						<b>Intégration graphique</b> : Mise en place de la charte
						graphique à partir de templates ou intégration de maquettes
						personnalisées.
					</li>
					<li>
						<b>Ajout de fonctionnalités spécifiques</b> : Développement de
						fonctionnalités avancées selon les exigences des projets.
					</li>
				</ul>
				<div className="md:flex flex-row ">
					<div className="flex-1">
						<h4 className="mb-1">Accompagnement du projet</h4>
						<ul className="text-xs mb-2">
							<li>- Faisabilité, chiffrage</li>
							<li>- Suivi du projet</li>
							<li>- Formation au back-office</li>
							<li>- Maintenance du parc clients</li>
						</ul>
					</div>
					<div className="flex-1">
						<h4 className="text-sm mb-1">Utiles</h4>
						<ul className="text-xs mb-2">
							<li>- Bonne connaissance SEO, Responsive</li>
							<li>- Performances, caches</li>
							<li>- Paramétrage serveur web</li>
							<li>- Sécurité, Email SMTP</li>
						</ul>
					</div>
				</div>
				<div className="mt-1 precision">
					<div>
						<Icons.office />
						<small> mavisibilite.fr | Saint Sébastien sur Loire</small>
					</div>
					<div>
						<Icons.calendar />
						<small>Juin 2018 | CDI</small>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<h3>Développeur en freelance</h3>
				<p className="mb-1 dark:text-white">
					Réalisation de sites vitrines & E-commerce pour PME | Agences de
					com.
				</p>
				<ul className="text-xs mb-2 dark:text-white">
					<li>- Analyse de projet</li>
					<li>- Chiffrage</li>
					<li>- Réalisation</li>
					<li>- Facturation, suivi clients</li>
				</ul>
				<div className="mt-1 precision">
					<div>
						<Icons.office className="inline" />
						<small> digitalcreation.fr | Nantes </small>
					</div>
					<div>
						<Icons.calendar className="inline" />
						<small>Depuis décembre 2013 | auto-entrepreneur</small>
					</div>
				</div>
			</div>
			<div className="relative ">
				<hr className="mb-4 hr" />

				<button
					className="absolute right-0 -bottom-3 text-xl px-2 pt-2 print:hidden text-gray-700"
					onClick={() => setDropdownOpen(!dropdownOpen)}
				>
					{dropdownOpen === true ? <span>-</span> : <span>+</span>}
				</button>
			</div>

			{dropdownOpen === true && (
				<div>
					<div className="md:flex flex-row conseiller">
						<div className="mb-4 flex-1">
							<h4>Conseiller Télécom</h4>
							<p>
								Gestion de parc télécom (fixe mobile) pour entreprises.
							</p>
							<div className="mt-1 precision">
								<div>
									<i className="bx bx-buildings text-neutral-400"></i>
									<small> Bouygues TELECOM | Nantes </small>
								</div>
								<div>
									<i className="bx bx-calendar text-neutral-400"></i>
									<small>Septembre 2012 à Août 2015</small>
								</div>
							</div>
						</div>

						<div className="mb-4 flex-1">
							<h4>Conseiller en assurance</h4>
							<p>
								Découverte clients proposition assurances et signature
								des contrats.
							</p>
							<div className="mt-1 precision">
								<div>
									<i className="bx bx-buildings text-neutral-400"></i>
									<small> April assurance | Nantes </small>
								</div>
								<div>
									<i className="bx bx-calendar text-neutral-400"></i>
									<small>Juin 2011 à septembre 2012</small>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-4 md:flex flex-row conseiller">
						<div className="mb-4 flex-1">
							<h4>Négociateur immobilier</h4>
							<p>
								Prospection, signature mandats de vente, visites de
								biens.
							</p>
							<div className="mt-1 precision">
								<div>
									<i className="bx bx-buildings text-neutral-400"></i>
									<small> Guy Hoquet & Pichet | Nantes </small>
								</div>
								<div>
									<i className="bx bx-calendar text-neutral-400"></i>
									<small>2007 à 2011</small>
								</div>
							</div>
						</div>
						<div className="mb-4 flex-1">
							<h4>Pilotage ligne de production</h4>
							<p>Organisation du personnel et paramètres machine.</p>
							<div className="mt-1 precision">
								<div>
									<i className="bx bx-buildings text-neutral-400"></i>
									<small>Fleury Michon | Mouilleron en pareds</small>
								</div>
								<div>
									<i className="bx bx-calendar text-neutral-400"></i>
									<small>2004 à 2007</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default Experience;
