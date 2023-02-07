import loadMainConfig from "./helpers/config.js";
import { setLoaderStatus } from "./helpers/loader.js";
import { checkForm, firstValidation } from "./helpers/validateForm.js";
import ListApi from "./helpers/ListApi.js";
import setBtnState from "./helpers/btnState.js";
import { post } from "./helpers/request.js";

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
	$checkedBox = d.querySelector(".checked-container"),
	$checkedIcon = d.querySelector(".checked-container span"),
	$checkedText = d.querySelector(".checked-container small"),
	$mainTitle = d.querySelector(".main-title"),
	$firstFieldInputs = d.querySelectorAll(".register-user-query input"),
	$secFieldInputs = d.querySelectorAll(".register-user-data input"),
	$loader = d.querySelector(".modal-loader");

const API = ListApi.register;

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

const dataCollector = {
	dni: "0000",
	fingerprint: "0000",
	name: "belu",
	lastname: "rosado",
	date: "2002-11-25",
	address: "Santo Domingo",
	tel: "0987091528",
	email: "jeff@gmail.com",
	password: "bellaciapo",
	salary: "415",
};

/**
 * Check if all inputs have been filled
 * @param {HTMLInputElement} input it gets an input element
 */
function checkFirstForm(input) {
	if (input.matches("#dni")) {
		firstValidation(input, $errorDni, $fingerprint);
	}
	if (input.matches("#fingerprint")) {
		if (firstValidation(input, $errorFinger)) {
			setBtnState($nextBtn, false);
			$firstFieldInputs.forEach((input) => {
				dataCollector[input.name] = input.value;
			});
		}
	}
}

function checkEveryInput(name, input) {
	if (name !== "repeat-password") {
		checkForm(input, $error, isValid);
		if (name === "password") dataCollector[name] = input.value;
	} else {
		if (dataCollector.password !== input.value) {
			$error.repeatPassword.classList.remove("hidden");
			isValid.passwordRepeat = false;
		} else {
			$error.repeatPassword.classList.add("hidden");
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
	if (
		name &&
		lastname &&
		address &&
		email &&
		salary &&
		tel &&
		password &&
		passwordRepeat
	) {
		setBtnState($registerBtn, false);
		$secFieldInputs.forEach((input) => {
			if (input.name !== "repeat-password") {
				dataCollector[input.name] = input.value;
			}
		});
	}
}

async function registerUser(data) {
	setLoaderStatus($loader, true);
	let res = await post(API, data);
	$registerForm.classList.add("border-none");
	$formUserData.classList.add("hidden");
	$checkedBox.classList.remove("hidden");
	replyToUser(res);
}

function replyToUser(isRegistered) {
	setLoaderStatus($loader, false);
	if (isRegistered) {
		$checkedIcon.classList.add("checked-btn-successful");
		$checkedIcon.textContent = "check";
		$checkedText.textContent = ". Registro éxitoso";
	} else {
		$checkedIcon.classList.add("checked-btn-unsuccessful");
		$checkedIcon.textContent = "cancel";
		$checkedText.textContent = "Registro sin éxito";
	}
	setTimeout(() => (location.pathname = "/national"), 1700);
}

loadMainConfig();
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
	if (e.target.matches("#register-btn")) registerUser(dataCollector);
});

d.addEventListener("DOMContentLoaded", (e) => $inputs.forEach((el) => (el.value = "")));
