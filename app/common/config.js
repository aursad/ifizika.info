app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise(function ($injector) {
        $injector.invoke([
            'spaRouteService', function (spaRouteService) {
                spaRouteService.route({ defaultPath: '/' });
            }
        ]);
    });
    $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.path();
        if (path != '/' && path.slice(-1) === '/') {
            $location.replace().path(path.slice(0, -1));
        }
    });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('apie', {
            url: '/apie',
            templateUrl: 'home.html'
        })
        .state('bendraukim', {
            url: '/bendraukim',
            templateUrl: 'home.html'
        })
        .state('klase', {
            abstract: true,
            url: '/klase',
            template: "<ui-view/>"
        })
        .state('klase.list', {
            url: '/:id',
            templateUrl: "app/templates/class.html",
            controller: "ClassController"
        })
        .state('klase.skyrius', {
            url: '/:id/skyrius/:skyrius',
            templateUrl: "app/templates/category.html",
            controller: "category-controller"
        })
    ;
}]);
