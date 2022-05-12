class Spinner {
	constructor(additionalClass = false) {
		this.SPINNER_CLASS = "spinner";
		this.SPINNER_ELEMENT_CLASS = `${this.SPINNER_CLASS}__element`;

		this.spinner = this.createSpinner(additionalClass);
	}

	createSpinner(additionalClass = false) {
		const spinnerDiv = document.createElement("div");
		spinnerDiv.classList.add(this.SPINNER_CLASS);

		if (additionalClass) {
			spinnerDiv.classList.add(additionalClass);
		}

		for (let i = 0; i < 4; i++) {
			const spinnerElement = document.createElement("div");
			spinnerElement.classList.add(this.SPINNER_ELEMENT_CLASS);
			spinnerDiv.append(spinnerElement);
		}

		return spinnerDiv;
	}

	getSpinner() {
		return this.spinner;
	}
}

export default Spinner;
