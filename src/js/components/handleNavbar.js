export default function handleNavbar(clicked, className, hidden, showed) {
	if (clicked.matches(className)) {
		hidden.classList.add("hidden");
		showed.classList.remove("hidden");
		clicked.classList.add("group-control-active");
	}
}
