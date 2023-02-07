import loadMainConfig from "./helpers/config.js";

const d = document,
	$btnCallout = d.querySelector("header button");

/**
 * Show a button removing clase hidden
 */
function appearButton() {
	setTimeout(() => $btnCallout.classList.remove("hidden"), 2200);
}

loadMainConfig();
d.addEventListener("DOMContentLoaded", (e) => appearButton());
