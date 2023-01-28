import loadConfig from "./helpers/config.js";
import validate from "./helpers/regEx.js";

const d = document,
	$inputs = d.querySelectorAll("input"),
	$fingerprint = d.getElementById("fingerprint"),
	$errorGroup = d.querySelectorAll("fieldset .error-group"),
	$submit = d.getElementById("submit"),
	$adviceForm = d.querySelector(".advices-container"),
	$registerForm = d.querySelector(".register-form"),
	$formMainData = d.querySelector(".register-user-query"),
	$formUserData = d.querySelector(".register-user-data"),
	$main = d.querySelector("main"),
	$checkedBtn = d.querySelector(".checked-container");

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
	if (e.target.matches("button")) e.preventDefault();
	if (e.target.matches("#submit") && !e.target.matches(".btn-disabled")) {
		if (!e.target.disabled) {
			$main.classList.add("main-expanded");
			$adviceForm.classList.add("hidden");
			$registerForm.classList.add("register-form-expanded");
			$formMainData.classList.add("hidden");
			$formUserData.classList.remove("hidden");
			$formUserData.querySelector("button").disabled = false;
			$formUserData.querySelector("button").classList.remove("btn-disabled");
		}
	}
	if (e.target.matches(".register-now")) {
		$registerForm.classList.add("border-none");
		$formUserData.classList.add("hidden");
		$checkedBtn.classList.remove("hidden");
		setTimeout(() => {
			location.pathname = location.host.match("github") ? "/national" : "/";
		}, 1700);
	}
});

d.addEventListener("DOMContentLoaded", (e) => {
	$inputs.forEach((el) => (el.value = ""));
});
