import loadConfig from "./helpers/config.js";
loadConfig();

const d = document,
	$btnCallout = d.querySelector("header button");

d.addEventListener("DOMContentLoaded", (e) => {
	setTimeout(() => $btnCallout.classList.remove("hidden"), 2200);
});
