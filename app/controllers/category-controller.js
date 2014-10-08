app.controller('CategoryController',['$rootScope', '$scope', '$state','themesResource',
    function($rootScope, $scope, $state, themesResource) {
    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loading = true;
    });
    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.loading = false;
    });

    $scope.classId = $state.params.id;
    $scope.categoryId = $state.params.skyrius;

        themesResource.get({id: $scope.classId, skyrius: $scope.categoryId }, function (success) {
        $scope.categoryData = success;
    });
    $scope.goNext = function (themeId) {
        $state.go("klase.tema", {id: $scope.classId, skyrius: $scope.categoryId, tema: themeId});
    }
}]);
