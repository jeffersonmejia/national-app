import handleLoader from "./loader.js";
const d = document,
	$modalLoader = d.querySelector(".modal-loader"),
	$navbarModal = d.querySelector(".navbar-modal");

export default function loadMainConfig() {
	d.addEventListener("DOMContentLoaded", (e) => {
		handleLoader($modalLoader);
	});
	d.addEventListener("click", (e) => {
		if (e.target.matches(".burger-menu")) {
			if ($navbarModal.classList.contains("navbar-modal-disabled")) {
				$navbarModal.classList.remove("navbar-modal-disabled");
				e.target.textContent = "arrow_back";
			} else {
				$navbarModal.classList.add("navbar-modal-disabled");
				e.target.textContent = "menu";
			}
		}
	});
}
