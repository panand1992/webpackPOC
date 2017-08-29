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
    {name: 'searchHomePage', route: 'search/:searchCategory?:queryParams', module: 'homeModule'}
];

module.exports = {pages : pages};