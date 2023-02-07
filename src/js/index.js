import loadConfig from "./helpers/config.js";
loadConfig();

const d = document,
	$btnCallout = d.querySelector("header button");

/**
 * Show a button removing clase hidden
 */
function appearButton() {
	setTimeout(() => $btnCallout.classList.remove("hidden"), 2200);
}

d.addEventListener("DOMContentLoaded", (e) => appearButton());
