myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', '$location', 'FIREBASE_URL',
  function($rootScope, $firebaseAuth, $location, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    return {
      login: function(user) {
        auth.$authWithPassword({
          email: user.email,
          password: user.password
        }).then(function(regUser) {
          $location.path('/success');
        }).catch(function(error) {
          $rootScope.message = error.message;
        });
      },

      register: function(user) {
        auth.$createUser({
          email: user.email,
          password: user.password
        }).then(function(regUser) {

          var regRef = new Firebase(FIREBASE_URL + 'users')
          .child(regUser.uid).set({
            date: Firebase.ServerValue.TIMESTAMP,
            regUser: regUser.uid,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          });//User Info

          $rootScope.message = "Hi " + user.firstName + "! Thanks for registering";
        }).catch(function(error) {
          $rootScope.message = error.message;
        }); //createUser
      } //Register
    };

  }]); //Factory
