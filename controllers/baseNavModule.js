var BaseModule = require('./baseModule');

var BaseNavModule = BaseModule.extend({
	initialize: function (options) {
      	_.extend(this, options);
    }
});

module.exports = BaseNavModule;