class MobileDetection {
	constructor(mobileWidth, desktopClassName) {
		this.mobileWidth = mobileWidth;
		this.desktopClassName = desktopClassName;

		this.bindEvents();
		this.checkDevice();
	}

	bindEvents() {
		window.addEventListener("resize", () => {
			this.checkDevice();
		});
	}

	checkDevice() {
		const newWidth = window.innerWidth;
		const isDesktop = this.isDesktop(newWidth);

		return this.changeDevice(isDesktop);
	}

	isDesktop(width) {
		return width > this.mobileWidth;
	}

	changeDevice(isDesktop) {
		const body = document.getElementsByTagName("body")[0];

		if (isDesktop) {
			return body.classList.add(this.desktopClassName);
		}

		return body.classList.remove(this.desktopClassName);
	}
}

export default MobileDetection;
