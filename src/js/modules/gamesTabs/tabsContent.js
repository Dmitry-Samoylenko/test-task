class TabsContent {
	constructor() {
		this.TYPE = "file"; // file or url
		this.URL = this.TYPE === "file" ? "/dist/data" : "https://www.betvictor.com/api/casino/categories"; // HTTPs URL NOT working because of CORS
	}

	async getContent(tabName) {
		let url = `${this.URL}/${tabName}`;

		if (this.TYPE === "file") {
			url += ".json";
		}

		return await this.getJSONFromURL(url);
	}

	async getJSONFromURL(url) {
		return await fetch(url, {
			method: "GET",
		}).then(function(response) {
			if(response.ok) {
				return response.json();
			}
			throw new Error("Can't receive information");
		}).then(json => {
			return json.components[0].payload.games;
		}).catch(function(err) {
			return console.log("Can't receive information", [err]);
		});
	}

}

export default TabsContent;
