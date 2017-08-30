var Backbone = require('backbone');

var UserModel = Backbone.Model.extend({
	id: 'userModel',

    defaults: {
      	email: '',
      	password: '',
      	isLoggedIn: false,
    },

    initialize: function (options) {
      	_.extend(this,options);
  	}
});

module.exports = UserModel;