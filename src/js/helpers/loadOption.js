export default function loadOption(data, $el) {
	for (const el in data) {
		let $option = document.createElement("option"),
			$clone = $option.cloneNode(true);

		$clone.textContent = el;
		$el.appendChild($clone);
	}
}
