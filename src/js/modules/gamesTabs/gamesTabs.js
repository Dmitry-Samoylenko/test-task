import Spinner from "../spinner";
import TabsContent from "./tabsContent";
import Game from "./game";

class GamesTabs {
	constructor(tabsClass) {
		this.tabsClass = tabsClass;
		this.tabsContent = new TabsContent();
		this.game = new Game();

		// Constants
		this.TAB_LINK_CLASS = "tabs__link";
		this.ACTIVE_LINK_CLASS = "active";
		this.TAB_CONSTENT_CLASS = `${this.tabsClass}__games`;
		this.ELEMENTS_LIMIT = 100;

		// Content block
		this.tabContent = document.getElementsByClassName(this.TAB_CONSTENT_CLASS)[0];

		// Tab Links
		this.tabLinks = document.querySelectorAll(`.${this.tabsClass} .${this.TAB_LINK_CLASS}`);

		// Create Spinner
		this.SPINNER_CLASS = `${this.tabsClass}__spinner`;
		const spinner = new Spinner(this.SPINNER_CLASS);
		this.spinner = spinner.getSpinner();

		// Set initial tab
		this.changeTab();

		this.bindEvents();
	}

	bindEvents() {
		this.tabLinks.forEach(tabLink => this.setClickEvent(tabLink));
	}

	setClickEvent(tabLink) {
		tabLink.addEventListener("click", (e) => {
			const targetElement = e.target;

			if (!targetElement.classList.contains(this.ACTIVE_LINK_CLASS)) {
				this.changeActive(targetElement);
				this.changeTab(targetElement);
			}
		});
	}

	changeActive(tabLink) {
		this.tabLinks.forEach(link => link.classList.remove(this.ACTIVE_LINK_CLASS));

		return tabLink.classList.add(this.ACTIVE_LINK_CLASS);
	}

	changeTab(selectedTab = false) {
		const tabLink = selectedTab ? selectedTab : this.tabLinks[0];

		return this.setTabContent(tabLink.dataset.tab);
	}

	async setTabContent(tabName) {
		this.tabContent.innerHTML = "";
		this.tabContent.append(this.spinner);

		const games = await this.tabsContent.getContent(tabName);

		if (!games) {
			return;
		}

		this.tabContent.innerHTML = "";

		games.slice(0, this.ELEMENTS_LIMIT).forEach(game => {
			this.tabContent.append(this.game.makeGameBlock(game));
		});
	}
}

export default GamesTabs;
