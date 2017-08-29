var Backbone = require('backbone'); 
var Marionette = require('backbone.marionette');
//var materialize = require('materialize-css/dist/js/materialize.js');

var nbHomePage = Marionette.ItemView.extend({
	template: require('../templates/home/homePageView.html'),

    tagName: 'div',

    className: 'nbHomePage',

    events: {
    	'click [data-action="searchRent"]': 'onSearchRent'
    },

    initialize: function(options){
    	_.extend(this,options);
    },

    onShow: function() {
  		var self = this;
      	//$(window).on('scroll',_.bind(this.onScroll,this));
      	window.scrollTo(0,0);

      	//$('body').css('overflow-y', "visible");

      	//$('ul.tabs.homeTabs').tabs();
      	// var selectedCategory = utils.readCookie('nbpt');

      	// if(selectedCategory) {
       //  	this.$el.find('[data-category="'+selectedCategory+'"]').click();
      	// }
  	},

  	onRender: function(){
      	var self = this;
    },

    onSearchRent: function(e) {
      	e.preventDefault();

      	Backbone.history.navigate('/search/rent',{
        	trigger: true
      	});
    }
});

module.exports = nbHomePage;