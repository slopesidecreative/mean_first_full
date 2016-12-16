app.controller('indexController', ['$scope', '$location', function($scope, location) {
  /* Private Methods */
  var usersIndex = function() {
     console.log('index controller -> usersIndex() called to kick things off...');
      // userFactory.index(function beingPassedToTheFactoryIndexByThisController(usersFromTheFactory) {
      //   $scope.users = usersFromTheFactory;
      // } /* end args passed to userFactor index */ ); //end userFactory method invokation
    } //end usersIndex

  /* Scope Methods */
  $scope.show = function(user_id) {
      location.url('/edit/' + user_id);
    }
    /* on load time */
  console.log("loading the controller");
  //console.log(userFactory);
  //console.log(this);
  usersIndex();
}]);
