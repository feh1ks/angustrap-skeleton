// Nav Routing
app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "app/pages/home.html"
		})
		.when("/about", {
			templateUrl: "app/pages/about.html"
		})
		.when("/news", {
			templateUrl: "app/pages/news.html"
		})
		.when("/contacts", {
			templateUrl: "app/pages/contacts.html"
		});

	 $locationProvider.html5Mode(true);
});
