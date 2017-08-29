var webpack = require('webpack');

module.exports = {
  	entry: './index.js',
  	module: {
	    loaders: [
	      	{
		        test: /\.html$/,
		        loader: 'underscore-template-loader'
	      	}
	    ]
  	},
  	output: {
	    path: __dirname + '/',
	    filename: 'bundle.js'
  	},
  	plugins: [
	    new webpack.ProvidePlugin({
	      	_: 'underscore'
	    })
  	],
  	resolve: {
    	modules: [__dirname + '/node_modules', __dirname + '/app']
  	},
  	resolveLoader: {
    	modules: [__dirname + '/node_modules']
  	}
};
