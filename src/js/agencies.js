import loadConfig from "./helpers/config.js";
loadConfig();

const d = document,
	$agenciesList = d.getElementById("agencies-list");

const API = "./assets/db/agencies.json";

const getAgenciesList = async () => {
	try {
		const res = await fetch(API),
			json = await res.json();
		if (!res.ok) {
			throw {
				status: res.status,
				statusText: res.statusText,
			};
		} else return json;
	} catch (error) {
		console.log(error);
	}
};

const loadAgenciesList = async () => {
	let agencies = await getAgenciesList(),
		$template = d.createDocumentFragment();

	if (agencies) {
		for (const agency in agencies) {
			let $option = d.createElement("option"),
				$clone = $option.cloneNode(true);

			$clone.textContent = agency;
			$agenciesList.appendChild($clone);
		}
	}
};

d.addEventListener("DOMContentLoaded", (e) => {
	loadAgenciesList();
});
