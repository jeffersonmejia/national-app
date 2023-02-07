import loadGeneralConfig from "./helpers/config.js";
import Apis from "./helpers/Apis.js";
import get from "./helpers/request.js";
import loadOption from "./helpers/loadOption.js";

const d = document,
	$agenciesList = d.getElementById("agencies-list"),
	API = Apis.agencies;

async function loadAgenciesList() {
	let agencies = await get(API);
	if (agencies) loadOption(agencies, $agenciesList);
}

loadGeneralConfig();
d.addEventListener("DOMContentLoaded", (e) => loadAgenciesList());
