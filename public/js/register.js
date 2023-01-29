import loadConfig from "./helpers/config.js";
import { checkForm, firstValidation } from "./helpers/validateForm.js";
import setBtnState from "./helpers/btnState.js";
loadConfig();

const d = document,
	$inputs = d.querySelectorAll("input"),
	$fingerprint = d.getElementById("fingerprint"),
	$errorDni = d.querySelector(".error__group__dni"),
	$errorFinger = d.querySelector(".error__group__finger"),
	$error = {
		name: d.querySelector(".error__group__name"),
		lastname: d.querySelector(".error__group__lastname"),
		address: d.querySelector(".error__group__address"),
		tel: d.querySelector(".error__group__tel"),
		email: d.querySelector(".error__group__email"),
		salary: d.querySelector(".error__group__salary"),
	},
	$nextBtn = d.getElementById("submit"),
	$registerBtn = d.getElementById("register-btn"),
	$adviceForm = d.querySelector(".advices-container"),
	$registerForm = d.querySelector(".register-form"),
	$formMainData = d.querySelector(".register-user-query"),
	$formUserData = d.querySelector(".register-user-data"),
	$main = d.querySelector("main"),
	$checkedBtn = d.querySelector(".checked-container"),
	$mainTitle = d.querySelector(".main-title");

const isValid = {
	name: false,
	lastname: false,
	address: false,
	email: false,
	tel: false,
	salary: false,
};

/**
 * Check if all inputs have been filled
 * @param {HTMLInputElement} input it gets an input element
 */
function checkFirstForm(input, first, next) {
	if (input.matches("#dni")) {
		firstValidation(input, $errorDni, $fingerprint);
	}
	if (input.matches("#fingerprint")) {
		setBtnState($nextBtn, !firstValidation(input, $errorFinger));
	}
}

d.addEventListener("keyup", (e) => {
	if (e.target.parentElement.matches(".register-user-query")) {
		checkFirstForm(e.target);
	}
	if (e.target.parentElement.matches(".group-input")) {
		checkForm(e.target, $error, isValid);
		const { name, lastname, address, email, salary, tel } = isValid;

		if (name && lastname && address && email && salary && tel) {
			setBtnState($registerBtn, false);
		}
	}
});

d.addEventListener("click", (e) => {
	if (e.target.matches("button")) e.preventDefault();
	if (e.target.matches("#submit")) {
		setBtnState($registerBtn, true);
		$main.classList.add("main-expanded");
		$adviceForm.classList.add("hidden");
		$registerForm.classList.add("register-form-expanded");
		$formMainData.classList.add("hidden");
		$formUserData.classList.remove("hidden");
		$mainTitle.classList.remove("hidden");
	}
	if (e.target.matches("#register-btn")) {
		$registerForm.classList.add("border-none");
		$formUserData.classList.add("hidden");
		$checkedBtn.classList.remove("hidden");
		setTimeout(() => {
			let HOST = "jeffersonmejia.github.io";
			location.pathname = location.host === HOST ? "/national" : "/";
		}, 1700);
	}
});

d.addEventListener("DOMContentLoaded", (e) => {
	$inputs.forEach((el) => (el.value = ""));
});
