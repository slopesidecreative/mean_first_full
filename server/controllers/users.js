/* friends controller */
console.log('USERS controller');

var mongoose   =  require('mongoose');
var moment     =  require('moment');

var Users     =  mongoose.model('User');

var dev = true;

module.exports = {
// "/"
// Index - show all
index: function (req, res){
   console.log('USER->INDEX');
   Users.find({}, function(err, data) {
      //console.log('DB returned: ',data);
      if(err){
         console.log('error ${err.errors}');
         if(dev){ res.json(err) };
      }else{
         //console.log('success: ',data);
         res.json(data);
      }
   })
},
/*
   GET /users/:id
   Show - view a single user by ID.
*/
show: function (req, res){
   console.log('USER->SHOW');
   Users.findOne(
      {
         _id: req.params.id
      },
      function(err, data) {
         if(err){
            console.log('error ${err.errors}');
            if(dev){ res.json(err) };
         }else{
            console.log('db found user: ',data);
            res.json(data);
         }
   })
},
/* POST
   /users
   Create a new user based on form submission.
*/
create: function (req, res){
   console.log('USER->CREATE');

   // BIRTHDAY VALIDATION
   // note: first_name and last_name are validated in the mongoose model
   var str = req.body.birthday;
   var re = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
   var found = str.match(re);

   if(!found){
      console.log('error - birthday invalid!');
      if(dev){ res.json({"err": {"errors":"invalid date"} }) };
   }else{
      var user = new Users({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          birthday: req.body.birthday,
          // TODO ensure passwords match
          password: req.body.password,
          password_verify: req.body.password_verify,
          email: req.body.email
      });
      console.log('new user to attempt to create: ', user);
      user.save(function(err,newUser){
         if(err){
            console.log('BUMMER! DIDNT CREATE NEW USER!!');
            console.log('error_messages_MongooseError-messagesor ${err.errors}');
            if(dev){ res.json(err) };
         }else{
            console.log('New USER Added to db!', newUser);
            res.json(newUser);
         }
      })
   }
},
/*    PUT /friends/:id
//    Process editing a friend by ID.
// */
update: function (req, res){
   console.log('USER->UPDATE - EDIT PROCESSING.....');
   // BIRTHDAY VALIDATION
   // note: first_name and last_name are validated in the mongoose model
   var str = req.body.birthday;
   var re = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
   var found = str.match(re);

   if(!found){
      console.log('error - birthday invalid!');
      if(dev){ res.json({"err": {"errors":"invalid date"} }) };
   }else{
      Users.findOne({_id: req.params.id}, function(err, user){
         console.log('USERS CONTROLLER: Found the user to update! ',user);

         user.first_name = req.body.first_name;
         user.last_name = req.body.last_name;
         user.birthday = req.body.birthday;
         user.email = req.body.email;
         user.password = req.body.password;
         user.password_verify = req.body.password_verify;

         user.save(function(err,updatedFriend){
          console.log('Updated friend!: ',updatedFriend);
         if(err){
            console.log('error updating ${err.errors}');
            if(dev){ res.json(err) };
            }else{
               // console.log('UPDATED FRIEND, NOW TO REDIRECT....');
               res.json(updatedFriend);
               }
         })
      })
   }
},
/* DELETE /users/:id
   Process deleting a user by ID.
*/
delete: function (req, res){
   console.log('FRIEND->DESTROY');
   Users.remove(
      {
         _id: req.params.id
      },
      function(err, data) {
      if(err){
         console.log('error ${err}');
         if(dev){ res.json(err) };
      }else{
         res.json({"message": "user deleted"});
      }
   })
}

} // exports
