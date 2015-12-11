var webpack = require("webpack");

module.exports = {
	entry: "./src/main.jsx",
	output: {
		filename: "./dist/build.js" 
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: "/node_modules/",
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	}
};