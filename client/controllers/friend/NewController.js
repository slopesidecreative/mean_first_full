app.controller('newController', ['friendsFactory','$location', function(friendsFactory, $location) {
   var _this = this;
   _this.friend = {}

   _this.addFriend = function(){
      friendsFactory.create( _this.friend, function newFriendCreatedNowRedirect(newFriend){
         if ( newFriend.hasOwnProperty('errors') ) {
            // handle errors
            console.log('ERRORS', newFriend.errors);
            alert('Error! Could not create friend!');
            $location.path("/");
         }else{
            friend.created_birthday = new Date(friend.birthday);
            _this.friend = friend;
            console.log('FRIEND created and recd by new friend controller -> redirect coming...', newFriend);
            _this.friend = {};
            $location.path("/show/" + newFriend._id);
         }
      });
   }
}]);
