
app.controller('MainController',['$rootScope', '$scope', '$state',  function($rootScope, $scope, $state){

  $rootScope.$on("$routeChangeStart", function(){
    $rootScope.loading = true;
  });

  $rootScope.$on("$routeChangeSuccess", function(){
    $rootScope.loading = false;
  });

  var scrollItems = [];

  for (var i=1; i<=100; i++) {
    scrollItems.push("Item " + i);
  }

  $scope.scrollItems = scrollItems;
  $scope.invoice = {payed: true};
  
  $scope.userAgent =  navigator.userAgent;
    $scope.classData =
    {
        "error": false,
        "classes": [
            {
                "id": 2,
                "class": 12,
                "name": "12 klasė"
            },
            {
                "id": 1,
                "class": 11,
                "name": "11 klasė"
            },
            {
                "id": 3,
                "class": 10,
                "name": "10 klasė"
            },
            {
                "id": 4,
                "class": 9,
                "name": "9 klasė"
            },
            {
                "id": 6,
                "class": 8,
                "name": "8 klasė"
            },
            {
                "id": 5,
                "class": 7,
                "name": "7 klasė"
            }
        ]
    };

    $scope.goNext = function(classId)
    {
        $state.go("klase.list", {id: classId});
    }
}]);