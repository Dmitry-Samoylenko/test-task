class Navigation {
	constructor(main, burger, openedNavClass) {
		this.main = main;
		this.burger = burger;
		this.openedNavClass = openedNavClass;

		this.bindEvents();
	}

	bindEvents() {
		this.burger.addEventListener("click", () => {
			this.toggleMenu();
		});

		// Click on background
		this.main.addEventListener("click", (e) => {
			if(e.target.classList.contains(this.openedNavClass))
			{
				this.toggleMenu();
			}
		});
	}

	toggleMenu() {
		this.burger.classList.toggle(this.openedNavClass);
		this.main.classList.toggle(this.openedNavClass);
	}
}

export default Navigation;
