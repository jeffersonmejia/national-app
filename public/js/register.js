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
		password: d.querySelector(".error__group__password"),
		repeatPassword: d.querySelector(".error__group__repeat__password"),
		salary: d.querySelector(".error__group__salary"),
		date: d.querySelector(".error__group__date"),
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
	password: false,
	passwordRepeat: false,
	email: false,
	tel: false,
	salary: false,
};

const dataCollector = {};

/**
 * Check if all inputs have been filled
 * @param {HTMLInputElement} input it gets an input element
 */
function checkFirstForm(input) {
	if (input.matches("#dni")) {
		firstValidation(input, $errorDni, $fingerprint);
	}
	if (input.matches("#fingerprint")) {
		setBtnState($nextBtn, !firstValidation(input, $errorFinger));
	}
}

function collectData(name, value) {
	dataCollector[name] = value;
	console.log(dataCollector);
}

function checkEveryInput(name, input) {
	if (name !== "repeat-password") {
		checkForm(input, $error, isValid);
		if (name === "password") dataCollector[name] = input.value;
	} else {
		if (dataCollector.password !== input.value) {
			$error.repeatPassword.classList.add("visible");
			isValid.passwordRepeat = false;
		} else {
			$error.repeatPassword.classList.remove("visible");
			isValid.passwordRepeat = true;
		}
	}
	handleSubmitStatus(isValid);
}

function handleSubmitStatus({
	name,
	lastname,
	address,
	email,
	salary,
	tel,
	password,
	passwordRepeat,
}) {
	if (name && lastname && address && email && salary && tel && password && passwordRepeat)
		setBtnState($registerBtn, false);
}

d.addEventListener("keyup", (e) => {
	if (e.target.parentElement.matches(".register-user-query")) {
		checkFirstForm(e.target);
	}
	if (e.target.parentElement.matches(".group-input"))
		checkEveryInput(e.target.name, e.target);
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
