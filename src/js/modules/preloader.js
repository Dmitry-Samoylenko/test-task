class Preloader {
	constructor(preloaderDelay, loadedClassName) {
		this.preloaderDelay = preloaderDelay;
		this.loadedClassName = loadedClassName;

		this.body = document.getElementsByTagName("body")[0];

		this.bindEvents();
	}

	bindEvents() {
		window.addEventListener("load", () => {
			setTimeout(() => {
				this.hidePreloader();
			}, this.preloaderDelay);
		});
	}

	hidePreloader() {
		return this.body.classList.add(this.loadedClassName);
	}
}

export default Preloader;
