import loadConfig from "./helpers/config.js";
loadConfig();

const d = document,
	$btnCallout = d.querySelector("header .btn");

d.addEventListener("DOMContentLoaded", (e) => {
	setTimeout(() => $btnCallout.classList.add("visible"), 2200);
});
