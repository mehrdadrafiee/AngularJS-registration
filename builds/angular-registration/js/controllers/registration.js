myApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.login = function() {
    $scope.message = "Welcome " + $scope.user.email + "!";
  };

  $scope.register = function() {
    $scope.message = "Hey " + $scope.user.firstName + "! You just registered.";
  }
}]);
