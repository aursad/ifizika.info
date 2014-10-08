app.factory('postResource', ['$resource', function($resource) {
    return $resource('/api/v1/post/:id', {id : '@id'}, {
            get: {
                method: 'GET',
                headers: { 'Securitykey': 'fb08e0e726dee861a3fc6375d142a3f3' }
            }
        });
}]);