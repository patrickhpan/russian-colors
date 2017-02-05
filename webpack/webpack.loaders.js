module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules)/,
		loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1,plugins[]=transform-decorators-legacy,plugins[]=transform-class-properties']
	},
	{
		test: /\.json$/,
		loader: 'json'
	},
	{
		test: /\.scss$/,
		loaders: ['style', 'css', 'sass']
	},
	{
		test: /\.(png|jpe?g|gif|svg|ttf|woff2?)$/,
		loader: 'url?limit=8192'
	}
];