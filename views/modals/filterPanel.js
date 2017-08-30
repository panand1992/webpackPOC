var Backbone= require('backbone'); 

var FilterPanelModal = Backbone.Modal.extend({
	template: require('../../templates/modals/filterPanel.hbs'),

	tagName: 'div',

	model: new Backbone.Model({
        name: "SAM",
        count: 0
    }),

	initialize: function (options) {
      	_.extend(this,options);
    }
});

module.exports = FilterPanelModal;