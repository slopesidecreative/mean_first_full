console.log('friends factory js file loaded....');


console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(){ // what parameters do we need?
      // Your code here
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(){// what parameters do we need?
        // Your code here
    };
    this.show = function(){// what parameters do we need?
      console.log('yeah, you need THIS CODE HERE');
        // Your code here
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);






//
// //FORMAT: app.factory('nameFactory', ['injectedservice',function(injectedservice){ .... }]);
// app.factory('friendsFactory', ['$http', function($http) {
//   /* Our factory is going to provide the methods to gather user data from a RESTful API
//         (we aren't quite there yet, but that's where we are going!)
//       Index: return all users
//       Show: return one user based on an a unique selector(often id)
//       Create: generate a new user
//       Update: update a specific user
//       Delete: remove a specific user
//
//       Our controller is going to determine what happens once we complete the change in the dataset using a callback function.
//       These are denoted below, for clarity as: functionPassedByControllerAsAnArgTo **Method**
//
//       Bonus: convert these callbacks to promises!
//   */
//   function FriendsConstructor() {
//      var friend = {};
//      var friends = [{}];
//
//     this.index = function(functionPassedByControllerAsAnArgToIndex) {
//       // console.log('http: ',$http);
//         $http.get('/friends').then(function(data){
//           if (typeof(functionPassedByControllerAsAnArgToIndex) === 'function') {
//             users = data.data;
//             functionPassedByControllerAsAnArgToIndex(users);
//           }
//         });
//         return;
//       }
//     };
//     /*
//       Creates a newUser by pushing the newUser argument into the users array
//       then runs the callback to return the updated array to controllers
//     */
//     this.create = function(newUser, functionPassedByControllerAsAnArgToCreate) {
//       console.log('factory create called: ',newUser);
//       if (typeof(newUser) === 'object') {
//         users.push(newUser)
//       }
//       if (typeof(functionPassedByControllerAsAnArgToCreate) === 'function') {
//         functionPassedByControllerAsAnArgToCreate(users);
//       }
//     };
//     /* This processes the update to the single user's data that comes from edit */
//     this.update = function(updateUser, idx, functionPassedByControllerAsAnArgToUpdate) {
//       if (users[idx]) {
//         for (var key in updateUser) {
//           users[idx][key] = updateUser[key];
//         }
//       }
//       if (typeof(functionPassedByControllerAsAnArgToUpdate) === 'function') {
//         functionPassedByControllerAsAnArgToUpdate(users[idx]);
//       }
//     }
//
//
//
//    //  this.show = function(idx, functionPassedByControllerAsAnArgToShow) {
//    //    console.log('SHOW CALLED',idx);
//    //    if (typeof(functionPassedByControllerAsAnArgToShow) === 'function') {
//    //      functionPassedByControllerAsAnArgToShow(users[idx]);
//    //    }
//    //  }
//
//    this.show = function(idx, functionPassedByControllerAsAnArgToShow) {
//      console.log('SHOW CALLED',idx);
//
//       $http.get('http://tanjir.com:8081/users/' + idx).then(function(data){
//          console.log('hey i got the single user back!!!!!', data);
//        if (typeof(functionPassedByControllerAsAnArgToShow) === 'function') {
//           user = data.data;
//           functionPassedByControllerAsAnArgToShow(user);
//        }
//       });
//       return;
//    }
//
//     this.delete = function(idx, functionPassedByControllerAsAnArgToDelete) {
//       if (users[idx]) {
//         users.splice(idx, 1);
//       }
//       if (typeof(functionPassedByControllerAsAnArgToDelete) === 'function') {
//         functionPassedByControllerAsAnArgToDelete(users);
//       }
//     }
//   }
//   /*
//     What is this factory returning?  Could we extend this code to be reused?
//   */
//   return (new FriendsConstructor());
// }]);
