import handleLoader from "./helpers/loader.js";
const d = document,
	$modalLoader = d.querySelector(".modal-loader"),
	$navbarModal = d.querySelector(".navbar-modal");

export default function loadConfig() {
	d.addEventListener("DOMContentLoaded", (e) => {
		handleLoader($modalLoader);
	});
	d.addEventListener("click", (e) => {
		if (e.target.matches(".burger-menu")) {
			$navbarModal.classList.toggle("navbar-modal-disabled");
		}
	});
}
