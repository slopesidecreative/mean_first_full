app.controller('userEditController', ['usersFactory', '$location', '$routeParams', function(usersFactory, $location, rParams) {

   var _this = this;
   _this.user = {};

   _this.controlValue = "Current Name:";

   _this.getUser = function() {
      usersFactory.show(rParams.id, function passedToUsersFactoryShow(user) {
      //console.log('this is the friend, based on the id: ',friend);
      // ANGULAR requires a type="date" field to be tied to Date object
      user.created_birthday = new Date(user.birthday);
      // console.log('friend: IsO',friend.created_birthday.toISOString());
      _this.user = user;
    })
  }

  _this.updateUser = function(){
     console.log('Update user called', _this.user);
     // UPDATE THE ISO STRING WITH THE VALUE FROM THE DATE OBJECT
     _this.user.birthday = _this.user.created_birthday.toISOString();
      usersFactory.update(_this.user, function gotUpdatedUser(updatedUser){
      // _this.user = updatedUser;
      // _this.controlValue = "Updated Name: ";
       $location.path("/");
    })
  }

  _this.getUser();
  //console.log(_this);
}]);
