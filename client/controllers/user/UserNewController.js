app.controller('userNewController', ['usersFactory','$location', function(usersFactory, $location) {
   var _this = this;
   _this.user = {}

   _this.addUser = function(){
      console.log('make me: ',_this.user);
      usersFactory.create( _this.user, function newUserCreatedNowRedirect(newUser){
         console.log('USER created and recd by new user controller -> redirect coming...', newUser);
         // console.log('ERRORS CAUGHT READY TO HANDLE: ',newUser);
         if ( newUser.hasOwnProperty('errors') ) {
            // handle errors
            console.log('ERRORS', newUser.errors);
            alert('Error! Could not create user!');
            $location.path("/");
            // ERROR HANDLING TEMPLATE:
            // set errors
            //errFactory.create(newUser.errors);
            // $location.path("/errs");
         }else{
            _this.user = {};
            $location.path("/show/" + newUser._id);
            // $location.path("/");
         }
      });
   }

}]);
