app.config(function ($routeProvider, ngMetaProvider) {
		ngMetaProvider.useTitleSuffix(true);
		ngMetaProvider.setDefaultTitle('Fallback Title');
		ngMetaProvider.setDefaultTitleSuffix(' | myApp');
		ngMetaProvider.setDefaultTag('author', 'Mike GW');
	})
	.run(['ngMeta', function (ngMeta) {
		ngMeta.init();
}]);
