export default function handleLoader(loader) {
	setTimeout(() => {
		loader.classList.add("loader-bar-disabled");
	}, 1500);
}

export function setLoaderStatus(loader, status) {
	if (status) {
		loader.classList.remove("loader-bar-disabled");
	} else {
		loader.classList.add("loader-bar-disabled");
	}
}
