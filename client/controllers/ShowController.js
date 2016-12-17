app.controller('showController', ['friendsFactory','$location','$routeParams', function(friendsFactory, $location, $routeParams) {
   var _this = this;
   _this.friend = {};

   // _this.getFriend = function(){
   //    friendsFactory.getFriend(function gotFriend(friend){
   //       console.log('i got a friend: ',friend);
   //    });
   //
   // }



   _this.getFriend = function() {
      friendsFactory.show($routeParams.id, function passedToFriendFactoryShow(friend) {
      //console.log('this is the friend, based on the id: ',friend);
      _this.friend = friend;
    })
  }



   _this.getFriend();



   // _this.newFriendCreatedNowRedirect = function(){
   //    //console.log('FRIEND created redirect called');
   //    _this.friend = {};
   //    $location.path("/index");
   // }
   //
   // _this.addFriend = function(){
   //    //console.log('make me a new friend: ', _this.friend);
   //    friendsFactory.create( _this.friend, _this.newFriendCreatedNowRedirect() );
   // }

}]);
