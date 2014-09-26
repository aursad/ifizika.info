app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

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
