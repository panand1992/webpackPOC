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
  	output: {
	    path: __dirname + '/',
	    filename: 'bundle.js'
  	},
  	plugins: [
	    new webpack.ProvidePlugin({
	      	_: 'underscore',
	      	$: "jquery",
   			jQuery: "jquery",
   			"window.jQuery": "jquery",
	    })

  	],
  	resolve: {
  		alias: {
  			//helpersHBS: path.resolve(__dirname, 'helpers/helpers.js'),
       		//handlebars: 'handlebars/dist/handlebars.min.js',
       		//jquery: 'jquery/dist/jquery.min.js',
       		materialize: path.resolve(__dirname, 'lib/materialize.amd.js'),
       		backboneModal: path.resolve(__dirname, 'lib/backbone.modal-min.js'),
       		//templates: path.resolve(__dirname, 'templates/modals/filterPanel.js')
    	},
    	modules: [__dirname + '/node_modules', __dirname + '/app']
  	},
  	resolveLoader: {
    	modules: [__dirname + '/node_modules']
  	}
};
