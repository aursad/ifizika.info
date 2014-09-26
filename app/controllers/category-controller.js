app.controller('category-controller',['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
    $scope.classId = $state.params.id;
    $scope.categoryId = $state.params.skyrius;

    $scope.categoryData = {
        "error": false,
        "themes": [
            {
                "id": 94,
                "name": "1. Kiet&#371j&#371 k&#363n&#371 sandara. Kristaliniai ir amorfiniai k&#363nai"
            },
            {
                "id": 95,
                "name": "2. Kiet&#371j&#371 k&#363n&#371 deformacijos r&#363&#353ys"
            },
            {
                "id": 96,
                "name": "3. Kiet&#371j&#371 k&#363n&#371 mechanin&#279s savyb&#279s"
            }
        ]
    };
}]);
/**
 * Created by Aurimas on 2014-09-26.
 */
