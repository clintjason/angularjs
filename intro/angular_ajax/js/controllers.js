var myApp = angular.module('myApp', []);

myApp.controller('MyController', [ $scope, $http, function MyController($scope,$http) {
  $http.get('js/data.json').success(function(response){
    $scope.artists = response.data;
  });
}]);

