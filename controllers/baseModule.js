var Marionette = require('backbone.marionette');
var allRoutes = require('../routers/allRoutes');
var PageHeaderView = require('../views/pageHeaderView');

var BaseModule = Marionette.Object.extend({
  	initialize: function(options) {
  		_.extend(this, options);
  	},

  	showPage: function (page, args) {
      	var methodName = page.route,
          	method = this.navHelpers[methodName];

      	// store route options in respective class
      	if (typeof method === 'function'){
        	method.apply(this, args);
      	}
      	else if (this[method]){
        	this[method].apply(this, args);
      	}
      	else {
        	throw 'Render helper for the page \'' + methodName + '\' is undefined in the module ' + this.name;
      	}
    },

  	getModule: function (routeName, args) {
      	var currentRoute = _.find(allRoutes.pages, {name: routeName});

      	this.findModule(currentRoute, args);
    },

    findModule: function (page, args) {
      	var moduleIns = this.modules[page.module],
          	self = this,
          	defaluts = {
	            module: 'home',
	            methodName: 'home',
	            pageRegion: this.contentRegion
          	}

      	// page = _.extend(defaluts, page);

      	if (!moduleIns){
        	// Load Module
        	require(['./' + page.module],function (ModuleDef) {
            	if (!ModuleDef){
              		throw 'Unable to load module ' + page.module;
            	}
            	moduleIns = new ModuleDef(self.options);
            	self.modules[page.module] = moduleIns;
            	moduleIns.showPage(page, args);
        	});
      	}
      	else {
        	// TODO this is only for debugging - remove this in prod
        	// console.log("loaded module from cache" + page.module);
        	moduleIns.showPage(page, args);
      	}
    },

    showPageHeader: function (options) {
      	if (options) {
          	var refreshHeader = options.refreshHeader,
          	currentView = options.currentView,
          	modelOptions =  options.modelOptions,
          	hidePageHeader = options.hidePageHeader,
          	isChatWindow = options.isChatWindow;
      	}
      	var self = this;
      	refreshHeader = true;
      	if (refreshHeader || currentView){
        	//this.userModel.getInfo(function () {
	          	// init socket connection if user is logged in.
	          	// if (!self.chatUtil.isSocketActive()) {
	           //  	self.chatUtil.initSocket(self.userModel);
	          	// }
	          	self.pageHeaderView = new PageHeaderView({
		            userModel: self.userModel,
		            currentView: currentView,
		            modelOptions: modelOptions,
		            //chatUtil: self.chatUtil,
		            optionParams: options
	          	});
	          	if (!hidePageHeader){
	            	self.headerRegion.show(self.pageHeaderView);
	          	}
	        //});
      	}
      	else {
        	if (!this.pageHeaderView || this.pageHeaderView.isDestroyed){
	          	this.pageHeaderView = new PageHeaderView({
	            	userModel: this.userModel,
	            	currentView: currentView,
	            	//chatUtil: this.chatUtil,
	            	optionParams: options
	          	});
	        }

        	if (!this.userModel.infoFetched){
          		this.userModel.getInfo(function () {
            		if (!hidePageHeader){
              			self.headerRegion.show(self.pageHeaderView);
            		}
          		});
        	}
			else {
          		this.headerRegion.show(this.pageHeaderView);
        	}
      	}
      	// Show pageHeader if navigating from details view.
      	// var $nbHeader = $('.nbHeader');

      	// if ($nbHeader.length > 0) {
       //  	$nbHeader.removeClass('hide');
      	// }

    },

    extractQueryParams: function (params) {

     	var queryParams = {};
     	var paramsArr = (params) ? params.split('&') : [];

     	_.each(paramsArr,function (param) {
       		var paramSplit = param.split('=');

       		if (paramSplit && paramSplit.length > 1){
         		queryParams[paramSplit[0]] = paramSplit[1];
       		}
     	});

     	return queryParams;
    }
});

module.exports = BaseModule;