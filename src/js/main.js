"use strict";

import mobileDetection from "./modules/mobileDetection";
import preloader from "./modules/preloader";
import navigation from "./modules/navigation";
import GamesTabs from "./modules/gamesTabs/gamesTabs";

(function () {
	document.addEventListener("DOMContentLoaded", () => {
		// Device Detection
		const mobileWidth = 1023;
		const desktopClassName = "desktop";

		new mobileDetection(mobileWidth, desktopClassName);

		// Preloader
		const preloaderDelay = 1000;
		const loadedClassName = "loaded";

		new preloader(preloaderDelay, loadedClassName);

		// Navigation
		const main = document.getElementById("main");
		const burger = document.getElementById("burger");
		const openedNavClass = "menu_visible";

		new navigation(main, burger, openedNavClass);

		// Games Tabs
		const tabsClass = "games-tabs";
		new GamesTabs(tabsClass);
	});
}());
