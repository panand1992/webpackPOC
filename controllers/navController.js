var Marionette = require('backbone.marionette');
var BaseNavModule = require('./baseNavModule'); 

var NavController = BaseNavModule.extend({
	modules: {},

  	initialize: function(options) {
  		BaseNavModule.prototype.initialize.apply(this, arguments);
      	_.extend(this,options);
  	},

  	// home: function(params) {
  	// 	//this.getModule('home', arguments);
  	// 	console.log("home mil gaya");
  	// 	var homePageView = new HomepageView();
  	// 	var pageHeaderView = new PageHeaderView();
  	// 	var homePageRegion = this.getOption('contentRegion');
  	// 	var pageHeaderRegion = this.getOption('headerRegion');
  	// 	homePageRegion.show(homePageView);
  	// 	pageHeaderRegion.show(pageHeaderView);
  	// 	//this.showChildView('layout', list);
	  //   //var layout = this.getOption('layout');
	  //   //layout.triggerMethod('show:blog:list');
  	// }

  	/* Home Module - Starts */
    home: function (params) {
      	this.getModule('home', arguments);
    },

    searchHomePage: function (searchCategory) {
      	this.getModule('searchHomePage', arguments);
    },

    searchPage: function (city,searchCategory) {
      	this.getModule('searchPage', arguments);
    },
});

module.exports = NavController;