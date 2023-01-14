import handleLoader from "./helpers/loader.js";

const d = document,
	$modalLoader = d.querySelector(".modal-loader");

d.addEventListener("DOMContentLoaded", (e) => {
	handleLoader($modalLoader);
});
