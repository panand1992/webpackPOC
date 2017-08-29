var Backbone = require('backbone'); 
var App = require('./app'); 


App.start();
Backbone.history.start({ pushState: true })