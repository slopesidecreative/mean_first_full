app.controller('indexController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, location) {

  /* Private Methods */
  var friendsIndex = function() {
     console.log('index controller -> usersIndex() called to kick things off...');
      friendsFactory.index(function beingPassedToTheFactoryIndexByThisController(friendsFromTheFactory) {
        $scope.friends = friendsFromTheFactory;
      } /* end args passed to userFactor index */ ); //end userFactory method invokation
   } //end friendsIndex


$scope.deleteFriend = function(_id){
   friendsFactory.delete(_id, function redirectAfterDelete(data){
      console.log('successfully deleted: ',data );
      location.path('/');
   })
}

  /* Scope Methods */
  $scope.show = function(user_id) {
      location.path('/friends/' + user_id + '/edit');
    }
    /* on load time */
  console.log("loading the controller");
  //console.log(userFactory);
  //console.log(this);
  friendsIndex();
}]);
