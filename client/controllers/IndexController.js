app.controller('indexController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, location) {
  /* Private Methods */
  var friendsIndex = function() {
     console.log('index controller -> usersIndex() called to kick things off...');
      friendsFactory.index(function beingPassedToTheFactoryIndexByThisController(friendsFromTheFactory) {
        $scope.friends = friendsFromTheFactory;
      } /* end args passed to userFactor index */ ); //end userFactory method invokation
    } //end usersIndex

  /* Scope Methods */
  $scope.show = function(user_id) {
      location.url('/friends/' + user_id + '/edit');
    }
    /* on load time */
  console.log("loading the controller");
  //console.log(userFactory);
  //console.log(this);
  friendsIndex();
}]);
