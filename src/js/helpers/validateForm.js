import regEx from "./regEx.js";

/**
 * Evaluate a string according to a type of regular expression
 * @param {String} value it gets a string to evaluate
 * @param {String} type it gets the regular expression type to evaluate
 * @returns
 */
const validate = (value, type) => regEx[type].test(value);

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
		error.classList.remove("hidden");
		if (next !== undefined) next.classList.add("hidden");
	} else {
		error.classList.add("hidden");
		if (next !== undefined) next.classList.remove("hidden") ?? null;
	}
	return isCompleted;
}

/**
 * Check a form completely and it valids that all inputs has information and
 * @param {HTMLInputElement} input it gets that input to get evalute
 * @param {HTMLUListElement} error it gets the message list to show in an unorder list
 * @param {Boolean} isValid it gets a object to validate all of the inputs
 */
function checkForm(input, error, isValid) {
	if (validate(input.value, input.name)) {
		error[input.name].classList.add("hidden");
		isValid[input.name] = true;
	} else {
		error[input.name].classList.remove("hidden");
		isValid[input.name] = false;
	}
}

export { firstValidation, validate, checkForm };
