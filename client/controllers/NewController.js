app.controller('newController', ['friendsFactory','$location', function(friendsFactory, $location) {
   var _this = this;
   _this.friend = {}

   _this.addFriend = function(){
      friendsFactory.create( _this.friend, function newFriendCreatedNowRedirect(newFriend){
         console.log('FRIEND created and recd by new friend controller -> redirect coming...', newFriend);
            _this.friend = {};
            $location.path("/show/" + newFriend._id);
      } );
   }

}]);
