app.controller('newController', ['friendsFactory','$location', function(friendsFactory, $location) {
   var _this = this;
   _this.friend = {}

   _this.newFriendCreatedNowRedirect = function(){
      console.log('FRIEND created redirect called');
      _this.friend = {};
      $location.path("/index");
   }

   _this.addFriend = function(){
      console.log('make me a new friend: ', _this.friend);
      friendsFactory.create( _this.friend, _this.newFriendCreatedNowRedirect() );
   }

}]);
