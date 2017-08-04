// Nav Routing
app.config(function ($routeProvider, $locationProvider, ngMetaProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "app/pages/home.html",
			data: {
				meta: {
					'title': 'Home page',
					'description': 'This is the description shown in Google search results'
				}
			}
		})
		.when("/about", {
			templateUrl: "app/pages/about.html",
			data: {
				meta: {
					'title': 'About page',
					'description': 'About description'
				}
			}
		})
		.when("/news", {
			templateUrl: "app/pages/news.html",
			data: {
					meta: {
						'title': 'News page',
						'description': 'News description'
					}
				}
		})
		.when("/contacts", {
			templateUrl: "app/pages/contacts.html",
			data: {
					meta: {
						'title': 'Contacts page',
						'description': 'Contacts description'
					}
				}
		});

	 $locationProvider.html5Mode(true);
});
