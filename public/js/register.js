import loadConfig from "./helpers/config.js";
import validate from "./helpers/regEx.js";
import setBtnState from "./helpers/btnState.js";
loadConfig();

const d = document,
	$inputs = d.querySelectorAll("input"),
	$fingerprint = d.getElementById("fingerprint"),
	$errorDni = d.querySelector(".error__group__dni"),
	$errorFinger = d.querySelector(".error__group__finger"),
	$nextBtn = d.getElementById("submit"),
	$registerBtn = d.getElementById("register-btn"),
	$adviceForm = d.querySelector(".advices-container"),
	$registerForm = d.querySelector(".register-form"),
	$formMainData = d.querySelector(".register-user-query"),
	$formUserData = d.querySelector(".register-user-data"),
	$main = d.querySelector("main"),
	$checkedBtn = d.querySelector(".checked-container");

const isValid = {
	name: false,
	lastname: false,
	address: false,
	email: false,
	salary: false,
};
/**
 * Validate the first step to get an account
 *
 * @param {HTMLInputElement} input it gets an input to get validated
 * @param {HTMLUListElement} error The message when things get wrong
 * @param {HTMLInputElement} next The next Element to show
 */
function firstValidation(input, error, next) {
	let isCompleted = validate(input.value, input.name);

	if (!isCompleted) {
		error.classList.add("error-active");
		if (next !== undefined) next.classList.add("hidden");
	} else {
		error.classList.remove("error-active");
		if (next !== undefined) next.classList.remove("hidden") ?? null;
	}
	return isCompleted;
}
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

function checkForm(form) {
	console.log("runnning...");
}

d.addEventListener("keyup", (e) => {
	if (e.target.parentElement.matches(".register-user-query")) {
		checkFirstForm(e.target);
	}
	if (e.target.parentElement.matches(".register-user-data")) {
		checkForm(e.target);
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
