myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL',
  function($rootScope, $firebaseAuth, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    return {
      login: function(user) {
        $rootScope.message = "Welcome " + user.email;
      },
      register: function(user) {
        auth.$createUser({
          email: user.email,
          password: user.password
        }).then(function(regUser) {
          $rootScope.message = "Hi " + user.firstName + "! Thanks for registering";
        }).catch(function(error) {
          $rootScope.message = error.message;
        }); //createUser
      } //Register
    };

  }]); //Factory