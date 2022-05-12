class Game {
	constructor() {
		this.GAME_CLASS = "game";
		this.GAME_IMAGE_WRAPPER_CLASS = `${this.GAME_CLASS}__image-wrapper`;
		this.GAME_IMAGE_CLASS = `${this.GAME_CLASS}__image`;
		this.GAME_TITLE_CLASS = `${this.GAME_CLASS}__title`;
		this.CDN_LINK = "https://http2.gaming-assets.com/mobile";
	}

	makeGameBlock(gameData) {
		const gameDiv = document.createElement("div");
		gameDiv.classList.add(this.GAME_CLASS);

		const imageBlock = this.makeImageBlock(gameData.regularImage);

		const titleDiv = document.createElement("div");
		titleDiv.classList.add(this.GAME_TITLE_CLASS);
		titleDiv.innerText = gameData.title;

		gameDiv.append(imageBlock);
		gameDiv.append(titleDiv);

		return gameDiv;
	}

	makeImageBlock(imageLink) {
		const image = document.createElement("img");
		image.classList.add(this.GAME_IMAGE_CLASS);
		image.src = this.CDN_LINK + imageLink;

		const imageWrapper = document.createElement("div");
		imageWrapper.classList.add(this.GAME_IMAGE_WRAPPER_CLASS);
		imageWrapper.append(image);

		return imageWrapper;
	}
}

export default Game;
