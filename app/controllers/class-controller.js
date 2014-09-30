app.controller('ClassController',['$rootScope', '$scope', '$state','categoryResource',
    function($rootScope, $scope, $state, categoryResource) {
    $scope.classId = $state.params.id;

    categoryResource.get({id: $scope.classId}, function(success)
    {
        $scope.classData = success;
    });

    $scope.goNext = function(categoryId)
    {
        $state.go("klase.skyrius", {id: $scope.classId, skyrius: categoryId});
    }
}]);
