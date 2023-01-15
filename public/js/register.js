import loadConfig from "./helpers/config.js";
import validate from "./helpers/regEx.js";

const d = document,
	$inputs = d.querySelectorAll("input"),
	$fingerprint = d.getElementById("fingerprint"),
	$errorGroup = d.querySelectorAll("fieldset .error-group"),
	$submit = d.getElementById("submit");
loadConfig();
d.addEventListener("keyup", (e) => {
	if (e.target.parentElement.matches("fieldset")) {
		let input = e.target;
		if (input.matches("#dni")) {
			if (!validate(input.value, input.name)) {
				$errorGroup[0].classList.add("error-active");
				$fingerprint.classList.add("hidden");
			} else {
				$errorGroup[0].classList.remove("error-active");
				$fingerprint.classList.remove("hidden");
			}
		} else if (input.matches("#fingerprint")) {
			if (!validate(input.value, input.name)) {
				$errorGroup[1].classList.add("error-active");
			} else {
				$errorGroup[1].classList.remove("error-active");
				$submit.classList.remove("btn-disabled");
				$submit.disabled = false;
			}
		}
	}
});
d.addEventListener("click", (e) => {
	if (e.target.matches("#submit") && !e.target.matches(".btn-disabled")) {
		e.preventDefault();
		console.log("touched!");
	}
});
d.addEventListener("DOMContentLoaded", (e) => {
	$inputs.forEach((el) => (el.value = ""));
});
