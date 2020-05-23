var webpack = require ("webpack");
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname,'src/index.js') ,
	output:{
		path: path.resolve(__dirname,'src/') ,
		filename:"bundleWP.js"
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname,'src'),
		port: 8082,
		stats: 'errors-only'
	},
	//target:'node',
	plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
  	],
	module:{
		loaders: [
			{
				test:/\.js$/,
				exclude: path.resolve(__dirname, "node_modules/"),
				loader: ["babel-loader"]
			}
		]
	}
}