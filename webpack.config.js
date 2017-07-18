var path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
			}, 
			{
		        test: /\.scss$/,
		        use: [{
		          loader: "style-loader"
		        }, {
		          loader: "css-loader",
		          options: { modules: true, localIdentName: '[name]__[local]--[hash:base64:5]' }
		        }, {
		          loader: "postcss-loader"
		        }, {
		          loader: "sass-loader"
		        }]
	        }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './app/index.html'})
	]
};
