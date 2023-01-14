export default function handleLoader(loader) {
	setTimeout(() => {
		loader.classList.add("loader-bar-disabled");
	}, 1500);
}
