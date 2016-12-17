app.controller('newController', ['friendsFactory','$location', function(friendsFactory, $location) {
   var _this = this;
   _this.friend = {}

   _this.newFriendCreatedNowRedirect = function(friend){
      console.log('FRIEND created redirect called',friend);

      _this.friend = {};
      $location.path("/show/" + friend._id);
   }

   _this.addFriend = function(){
      //console.log('make me a new friend: ', _this.friend);
      friendsFactory.create( _this.friend, _this.newFriendCreatedNowRedirect(friend) );
   }

}]);
