import loadConfig from "./helpers/config.js";
import validate from "./helpers/regEx.js";

const d = document,
	$inputs = d.querySelectorAll("input"),
	$fingerprint = d.getElementById("fingerprint"),
	$errorGroup = d.querySelectorAll("fieldset .error-group");

loadConfig();
d.addEventListener("keyup", (e) => {
	if (e.target.parentElement.matches("fieldset")) {
		let input = e.target;
		if (input.matches("#dni")) {
			let setClass = !validate(input.value, input.name) ? "add" : "remove";
			$errorGroup[0].classList[setClass]("error-active");
			$fingerprint.disabled = false;
		} else {
			let setClass = !validate(input.value, input.name) ? "add" : "remove";
			$errorGroup[1].classList[setClass]("error-active");
		}
	}
});
d.addEventListener("DOMContentLoaded", (e) => {
	$inputs.forEach((el) => (el.value = ""));
});
