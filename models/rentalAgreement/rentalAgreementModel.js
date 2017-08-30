var BackboneNestedModel = require('backbone-nested-model')

var RentalAgreementModel = BackboneNestedModel.extend({
	defaults: {
      	city: '',
      	executionDate: '',
      	landlord: [],
      	tenant: [],
      	leaseDuration: {},
      	maintenance: {"needToPay":false},
      	property: {},
      	rent: {
	        month:0,
	        rentIncrement:0,
	        isDepositRefundable:true,
	        stampPaper:"20"
      	},
      	amenities: {
	        fan:0,
	        tube:0,
	        bed:0,
	        sofa:0,
	        table:0,
	        chair:0,
	        ac:0,
	        geezer:0
      	},
      	agreementStatus: "new",
    },

    url: function(){
      	return '/api/v1/agreement/get/'+this.id;
    },

    validate: function(attr) {
      
    },

    initialize: function (options) {
      	_.extend(this,options);
    },

    fetch :function(options){
      	var sendOptions = _.extend({
	        beforeSend: this.appendRequestParameters,
	        emulateJSON: false
      	},options);
      	return Backbone.Model.prototype.fetch.call(this, sendOptions);
    },

    parse :function(response){
       	if(response.data){
        	return response.data;
      	}
      	return response;
    }
});

module.exports = RentalAgreementModel;