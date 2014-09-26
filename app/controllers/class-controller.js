app.controller('ClassController',['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
    $scope.classId = $state.params.id;

    $scope.classData = {
        "error": false,
        "categories": [
        {
            "id": 16,
            "name": "3. Kreivaeigis jud&#279jimas"
        },
        {
            "id": 14,
            "name": "1. Bendros &#382inios apie jud&#279jim&#261"
        },
        {
            "id": 15,
            "name": "2. Netolyginis tiesiaeigis jud&#279jimas"
        },
        {
            "id": 17,
            "name": "4. Jud&#279jimo d&#279sniai"
        },
        {
            "id": 18,
            "name": "5. J&#279gos gamtoje"
        },
        {
            "id": 19,
            "name": "6. Statika"
        },
        {
            "id": 20,
            "name": "7. Tverm&#279s d&#279sniai mechanikoje"
        },
        {
            "id": 21,
            "name": "8. Mechaniniai svyravimai ir bangos"
        },
        {
            "id": 22,
            "name": "9. Reliatyvumo teorijos pradmenys"
        },
        {
            "id": 23,
            "name": "10. Molekulin&#279s kinetin&#279s teorijos pagrindai"
        },
        {
            "id": 24,
            "name": "11. Termodinamika"
        },
        {
            "id": 25,
            "name": "12. Garai ir skys&#269iai"
        },
        {
            "id": 26,
            "name": "13. Kietieji k&#363nai"
        },
        {
            "id": 27,
            "name": "14. Elektrostatika"
        }
    ]
    };

    $scope.goNext = function(categoryId)
    {
        $state.go("klase.list.skyrius", {id: $scope.classId, skyrius: categoryId});
    }
}]);
