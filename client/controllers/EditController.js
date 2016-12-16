app.controller('editController', ['friendsFactory', '$location', '$routeParams', function(friendsFactory, $location, rParams) {

   var _this = this;
   _this.friend = {};
   _this.controlValue = "Current Name:";

   _this.getFriend = function() {
      friendsFactory.show(rParams.id, function passedToFriendFactoryShow(friend) {
      //console.log('this is the friend, based on the id: ',friend);
      _this.friend = friend;
    })
  }

  _this.updateFriend = function(){
      friendsFactory.update(_this.friend, function gotUpdatedFriend(updatedFriend){
      _this.friend = updatedFriend;
      // what is this?
      _this.controlValue = "Updated Name: ";
       $location.path("/");
    });
  }
  /* on load time */
  _this.getFriend();
  console.log(_this);
}]);
