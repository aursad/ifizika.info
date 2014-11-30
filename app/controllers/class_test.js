describe("ClassController", function () {

    var rootScope, scope, controller, state, categoryResource, httpBackend;

    //Load module
    beforeEach(module("ifizika"));

    ////Inject dependencies
    beforeEach(inject(function ($controller, $rootScope, $scope, $httpBackend, $state, _categoryResource_) {

        rootScope = $rootScope.$new();
		scope = scope.$new();
        httpBackend = $httpBackend;
        categoryResource = _categoryResource_;
        controller = $controller("ClassController", {
            $scope: scope,
            categoryResource: categoryResource,
        });
    }));

    ////Set up
    beforeEach(function () {
        httpBackend.whenGET("/api/v1/class").respond({ id: 1 });
    });

    ////Tests

    it("it should fetch list of pupils", function () {
        httpBackend.flush();
        expect(scope.classData.id).toEqual(1);
    });

})
