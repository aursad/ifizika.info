'use strict';

angular.controller('MainController', ['$rootScope', '$scope', '$state', 'classResource', '$http',
    function ($rootScope, $scope, $state, classResource, $http) {

        $rootScope.$on("$routeChangeStart", function () {
            $rootScope.loading = true;
        });
        $rootScope.$on("$routeChangeSuccess", function () {
            $rootScope.loading = false;
        });

        classResource.get({}, function (success) {
            $scope.classData = success;
        });


        $scope.goNext = function (classId) {
            $state.go("klase.list", {id: classId});
        }
    }]);