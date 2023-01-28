/**
 * Set state interaction to a button
 * @param {HTMLButtonElement} btn it gets a button element
 * @param {Boolean} state it gets true to disable button
 */
export default function setBtnState(btn, state) {
	if (state) {
		btn.disabled = true;
		btn.classList.add("btn-disabled");
	} else {
		btn.disabled = false;
		btn.classList.remove("btn-disabled");
	}
}
