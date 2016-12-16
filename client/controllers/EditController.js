app.controller('editController', ['friendsFactory', '$location', '$routeParams', function(friendsFactory, $location, rParams) {

   var _this = this;
   _this.user = {};

  /* Public Properties */
  _this.controlValue = "Current Name:";
  /* Public Methods */
  _this.getFriend = function() {
    friendsFactory.show(rParams.id, function passedToUserFactoryShow(user) {
      _this.user = user;
    })
  }

  _this.updateFriend = function(){
    userFactory.update(_this.user, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      _this.user = userFromFactory;
      // what is this?
      _this.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  _this.getFriend();
  console.log(_this);
}]);
