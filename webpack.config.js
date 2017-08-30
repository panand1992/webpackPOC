var webpack = require('webpack');
var path = require('path');

module.exports = {
  	entry: './index.js',
  	module: {
	    loaders: [
	      	{
		        test: /\.html$/,
		        loader: 'underscore-template-loader'
	      	},
	      	{
	         	test: /\.css$/,
	         	use: [
	           		'style-loader',
	           		'css-loader'
	         	]
	       	},
	       	{ 	test: /\.hbs$/, 
	       		loader: "handlebars-loader" 
	       	}
	    ]
  	},
  	externals: {
  		jquery: 'jQuery'
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
  		alias: {
  			//helpersHBS: path.resolve(__dirname, 'helpers/helpers.js'),
       		handlebars: 'handlebars/dist/handlebars.min.js',
       		materialize: path.resolve(__dirname, 'lib/materialize.amd.js'),
       		// 'backbone.modal': path.resolve(__dirname, 'lib/backbone.modal-min.js'),
       		//templates: path.resolve(__dirname, 'templates/modals/filterPanel.js')
    	},
    	modules: [__dirname + '/node_modules', __dirname + '/app']
  	},
  	resolveLoader: {
    	modules: [__dirname + '/node_modules']
  	}
};
