app.controller('newController', ['friendsFactory','$location', function(friendsFactory, $location) {
   var _this = this;
   _this.friend = {}

   _this.newFriendCreatedNowRedirect = function(_id){
      console.log('FRIEND created redirect called',_id);
      _this.friend = {};
      $location.path("/show/" + _id);
   }

   _this.addFriend = function(){
      //console.log('make me a new friend: ', _this.friend);
      friendsFactory.create( _this.friend, _this.newFriendCreatedNowRedirect(_this.friend._id) );
   }

}]);
