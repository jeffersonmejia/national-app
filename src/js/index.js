const d = document,
	$navbarModal = d.querySelector('.navbar-modal')

d.addEventListener('click', (e) => {
	if (e.target.matches('.burger-menu')) {
		if ($navbarModal.classList.contains('navbar-modal-disabled')) {
			$navbarModal.classList.remove('navbar-modal-disabled')
			e.target.textContent = 'arrow_back'
		} else {
			$navbarModal.classList.add('navbar-modal-disabled')
			e.target.textContent = 'menu'
		}
	}
})
