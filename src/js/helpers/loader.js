export default function handleLoader(loader, body) {
	setTimeout(() => {
		loader.classList.add("loader-bar-disabled");
	}, 3500);
}
