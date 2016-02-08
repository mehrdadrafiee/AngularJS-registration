myApp.controller('RegistrationController',
  ['$scope', '$firebaseAuth', 'FIREBASE_URL', function($scope, $firebaseAuth, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);


  $scope.login = function() {
    $scope.message = "Welcome " + $scope.user.email + "!";
  };//Login

  $scope.register = function() {
    auth.$createUser({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function(regUser) {
      $scope.message = "Hey " + $scope.user.firstName + "! Thanks for registering.";
    }).catch(function(error) {
      $scope.message = error.message;
    });//Create User
  };//Register

}]);//Controller
