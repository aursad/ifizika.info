app.factory('themesResource', ['$resource', function($resource) {
    return $resource('/api/v1/theme/:id/:skyrius', {id : '@id', skyrius : '@skyrius'}, {
            get: {
                method: 'GET',
                headers: { 'Securitykey': 'fb08e0e726dee861a3fc6375d142a3f3' }
            }
        });
}]);