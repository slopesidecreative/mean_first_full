app.controller('indexController', ['$scope','friendsFactory', 'usersFactory', '$location','moment', function($scope, friendsFactory, usersFactory, location, moment) {

var index = function() {

   console.log('index controller -> index() called to kick things off...');
   friendsFactory.index(function beingPassedToTheFactoryIndexByThisController(friendsFromTheFactory) {
     $scope.friends = friendsFromTheFactory;
   });

    console.log('index controller -> index() called to kick things off...');
    usersFactory.index(function beingPassedToTheFactoryIndexByThisController(usersFromTheFactory) {
     $scope.users = usersFromTheFactory;
    });
}
/* FRIENDS + + + + + + + + + + + + + + + + + + + + + + + + + + +  */
$scope.deleteFriend = function(_id){
   friendsFactory.delete(_id, function redirectAfterDelete(data){
      console.log('successfully deleted: ',data );
      location.path('/');
   });
}

$scope.showFriend = function(_id, context){
   location.path('/friends/' + _id );
}

$scope.updateFriend = function(user_id) {
   location.path('/friends/' + user_id + '/edit');
 }

/* USERS   + + + + + + + + + + + + + + + + + + + + + + + + + + +  */
$scope.deleteUser = function(_id){
   friendsFactory.delete(_id, function redirectAfterDelete(data){
      console.log('successfully deleted: ',data );
      location.path('/');
   });
}

$scope.showUser = function(_id, context){
   location.path('/users/' + _id );
}

$scope.updateUser = function(user_id) {
   location.path('/users/' + user_id + '/edit');
 }

/* INIT   + + + + + + + + + + + + + + + + + + + + + + + + + + +  */
console.log("loading the index controller");
index();

}]);
