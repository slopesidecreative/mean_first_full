app.controller('indexController', ['$scope','friendsFactory', '$location','moment', function($scope, friendsFactory, location, moment) {

var index = function() {
  console.log('index controller -> index() called to kick things off...');
   friendsFactory.index(function beingPassedToTheFactoryIndexByThisController(friendsFromTheFactory) {
     $scope.friends = friendsFromTheFactory;
   });
}

$scope.delete = function(_id){
   friendsFactory.delete(_id, function redirectAfterDelete(data){
      console.log('successfully deleted: ',data );
      location.path('/');
   });
}

$scope.show = function(_id){
   location.path('/friends/' + _id );
}

$scope.update = function(user_id) {
   location.path('/friends/' + user_id + '/edit');
 }

 /* on load time */
console.log("loading the controller");
index();

}]);
