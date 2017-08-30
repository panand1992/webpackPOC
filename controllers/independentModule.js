var BaseModule = require('./baseModule');
var AboutUS = require('../views/common/aboutus');

var IndependentModule = BaseModule.extend({

    name: 'IndependentModule',

    initialize: function (options) {
      	_.extend(this, options);
    },

    navHelpers: {
      	'rent-receipt(/)': 'rentReceipt',
      	'rent-receipt/confirmation/:id': 'rentReceipt',
      	'online-rent-receipt-generator': 'rentReceipt',
      	'terms-and-condition(?:params)': 'termsAndConditions',
      	'about/about-us': 'aboutUs',
      	'testimonials(/)': 'showTestimonials',
      	'verify/email/:emailId/:token': 'verifyEmail',
      	'rewards?:queryparam': 'coupon10k',
      	'owner/plans': 'ownerPlan',
      	'owner/plans/:planType':'ownerPlanType',
      	// 'stayEasy': 'stayEasy'
      	'corporate/offers/:companyName': 'corporatePlan',
      	'corporate/:companyName': 'corporatePlan',
      	'builder/:companyName': 'corporatePlan',
      	'builder/offers/:companyName': 'corporatePlan',
      	'socialSignIn(?:queryparams)' : 'socialSignIn',
      	'socialSignIn/:propertyType/:propertyId/:propertyRent(?:queryparams)': 'socialSignInProperty',

      	'home-loans': 'bajajLandingPage',
      	'apply-loan': 'applyLoanGeneral',
      	'apply-loan/:propertyType/:propertyId/:loanAmount': 'applyLoan',
      	'click-and-earn': 'clickAndEarn',
      	'nri-details': 'nriDetails',
      	'about/faq(?:params)':'nriFAQs'
    },

    rentReceipt: function(){

    },

    termsAndConditions: function(){

    },

    aboutUs: function(){
    	var aboutUs = new AboutUS();
      	this.showPageHeader();
      	//this.userModel.headerOptions = null;
      	this.contentRegion.show(aboutUs);
    },

    showTestimonials: function(){

    },

    verifyEmail: function(){

    },

    coupon10k: function(){

    },


    ownerPlan: function(){

    },

	ownerPlanType: function(){

	},

	corporatePlan: function(){

	},

	socialSignIn: function(){

	},

	socialSignInProperty: function(){

	},

	bajajLandingPage: function(){

	},

	applyLoanGeneral: function(){

	},

	applyLoan: function(){

	},

	clickAndEarn: function(){

	},

	nriDetails: function(){

	},

	nriFAQs: function(){

	}
});

module.exports = IndependentModule;