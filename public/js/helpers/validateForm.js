import validate from "./regEx";

function validateField(expression, field) {
	if (validate(expression, field)) field.classList.remove(`group__error__${field.name}`);
	else field.classList.add(`group__error__${field.name}`);
}

export default function validateForm(expression, inputs, e) {
	return validateField(expression.name, e.target);
}
