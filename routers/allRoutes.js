var pages = [
	// home
    {name: 'home', route: '', module: 'homeModule'},
    {name: 'home', route: '?:queryparams', module: 'homeModule'},
    
    // Android Return URL fix
    {name: 'home', route: 'androidApp', module: 'homeModule'},
    // Search
    {name: 'searchPage', route: ':city/rent', module: 'homeModule'},
    {name: 'searchPage', route: ':city/buy', module: 'homeModule'},
    {name: 'searchPage', route: ':city/pg', module: 'homeModule'},
    {name: 'searchPage', route: ':city/shared', module: 'homeModule'},
    {name: 'searchPage', route: ':city/flatmates', module: 'homeModule'},
    {name: 'searchHomePage', route: 'search/:searchCategory?:queryParams', module: 'homeModule'},

    // Rental Agreement
    {name:'showRentalAgreement', route: 'rentalAgreement/', module: 'rentalAgreementModule'},
    {name:'showRentalAgreementMobile', route: 'rental-agreement(/)', module: 'rentalAgreementModule'},
    {name:'showRentalAgreement', route: 'rental-agreement/:id', module: 'rentalAgreementModule'},
    {name:'showRentalAgreementMobile', route: 'online-rental-agreements(?:queryparams)', module: 'rentalAgreementModule'},
    {name:'showRATrackStatus', route: 'track-ra-status/:id', module: 'rentalAgreementModule'},

    // side nav
    {name:'termsAndConditions', route: 'terms-and-condition(?:params)', module: 'independentModule'},
    {name:'aboutUs', route: 'about/about-us', module: 'independentModule'},
    {name:'showTestimonials', route: 'testimonials(/)', module: 'independentModule'},
    {name:'verifyEmail', route: 'verify/email/:emailId/:token', module: 'independentModule'},
    {name:'coupon10k', route: 'rewards?:queryparam', module: 'independentModule'},
];

module.exports = {pages : pages};