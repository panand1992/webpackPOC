var Marionette = require('backbone.marionette');
var materialize = require('materialize');

var pageHeaderView = Marionette.ItemView.extend({
	template: require('../templates/home/pageHeader.html'),

    tagName: 'div',

    className: '',

    ui: {
      	menuBtn: '.nbSideMenuBtn',
      	sideNavMenu: '#sideNavMenu',
      	toggleMapView : '.switch-to-map-view',
      	toggleListView:'.switch-to-list-view',
      	shareContainer: '#shareContainer',
      	notificationCountValue: '#notificationCountValue',
      	noti_container:'[data-action="notificationClick"]'
    },

    events: {
      	'click [data-action="sideNav"]': 'onNavMenuClick',
      	'click [data-action="onAboutUs"]': 'onAboutUs',
  	},

    initialize: function(options) {
  		_.extend(this,options);
  	},

  	onShow: function () {
  		var self = this;
  		if(this.$el.width() > 0){
  			if(typeof this.ui.menuBtn !== 'undefined' && this.ui.menuBtn != null){
  				this.ui.menuBtn.sideNav({
            		closeOnClick: true,
            		menuWidth: this.$el.width() - 80
          		});
          		this.$el.find('.menuSwitch').width(this.$el.find('.side-nav').width());

          		this.ui.sideNavMenu.css({
            		// left: '-400px'
            		left: - this.$el.width()
          		});
  			}
  		}
  		else{
  			setTimeout(function(){
          		if(typeof self.ui.menuBtn !== 'undefined' && self.ui.menuBtn != null){
            		self.ui.menuBtn.sideNav({
		              	closeOnClick: true,
		              	menuWidth: self.$el.width() - 80
            		});

            		self.$el.find('.menuSwitch').width(self.$el.find('.side-nav').width());

            		self.ui.sideNavMenu.css({
              			// left: '-400px'
              			left: - self.$el.width()
            		});
          		}
        	}, 0)
  		}
  	},

  	onAboutUs: function(e) {
      	e.preventDefault();

      	this.hideSideNav();
      	Backbone.history.navigate('about/about-us',{
        	trigger: true
      	});
    },

    hideSideNav: function(e) {
      	this.$el.find('[data-action="sideNav"]').sideNav('hide');
    }
});

module.exports = pageHeaderView;