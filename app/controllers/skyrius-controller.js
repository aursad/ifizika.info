'use strict';

angular.controller('SkyriusController', ['$rootScope', '$scope', '$state', 'postResource',
    function ($rootScope, $scope, $state, postResource) {
        $rootScope.$on("$routeChangeStart", function () {
            $rootScope.loading = true;
        });
        $rootScope.$on("$routeChangeSuccess", function () {
            $rootScope.loading = false;
        });

        $scope.themeId = $state.params.tema;

        postResource.get({id: $scope.themeId}, function (success) {
            $scope.postData = success;
        });
    }]);
