const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		"main": "./src/js/main.js",
		"main.min": "./src/js/main.js",
	},
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "dist/js"),
		filename: "[name].js"
	},
	optimization: {
		minimize: true
	},
};
