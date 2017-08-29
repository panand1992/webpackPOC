//var Backbone.Modal = require('backbone.modal'); 
var Marionette = require('backbone.marionette');

var FilterPanelModal = Marionette.LayoutView.extend({
	template: require('../../templates/modals/filterPanel.html'),

	tagName: 'div',

	initialize: function (options) {
      	_.extend(this,options);
    }
});

module.exports = FilterPanelModal;