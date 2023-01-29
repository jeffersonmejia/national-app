import regEx from "./regEx.js";

const validate = (value, type) => regEx[type].test(value);

function checkForm(input, error, isValid) {
	if (validate(input.value, input.name)) {
		error[input.name].classList.remove("visible");
		isValid[input.name] = true;
	} else {
		error[input.name].classList.add("visible");
		isValid[input.name] = false;
	}
}

export { validate, checkForm };
