const d = document,
	$modalLoader = d.querySelector(".modal-loader");

d.addEventListener("DOMContentLoaded", (e) => {
	setTimeout(() => {
		$modalLoader.classList.add("loader-bar-disabled");
	}, 1500);
});
