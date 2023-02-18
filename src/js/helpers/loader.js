export default function handleLoader(loader) {
	setTimeout(() => loader.classList.add("hidden"), 2000);
}

export function setLoaderStatus(loader, status) {
	if (status) loader.classList.remove("hidden");
	else loader.classList.add("hidden");
}
