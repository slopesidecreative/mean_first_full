/* friends controller */
console.log('friends controller');

var mongoose   =  require('mongoose');
var moment     =  require('moment');

var Friends     =  mongoose.model('Friend');

module.exports = {
// "/"
// Index - show all
index: function (req, res){
   console.log('FRIEND->INDEX');
   Friends.find({}, function(err, data) {
      console.log('DB returned: ',data);
      if(err){
         console.log('error ${err}');
      }else{
         console.log('success: ',data);
         res.json(data);
      }
   })
},
/*
   GET /friends/:id
   Show - view a single friend by ID.
*/
show: function (req, res){
   console.log('FRIEND->SHOW');
   Friends.findOne(
      {
         _id: req.params.id
      },
      function(err, data) {
      if(err){
         console.log('error ${err}');
      }else{
         // SAME VIEW DISPLAYS ONE OR ALL
         res.json(data);
      }
   })
},
/* POST
   /items
   Create a new item based on form submission.
*/
create: function (req, res){
   console.log('FRIEND->CREATE');

// TODO CATCH BIRTHDAY VALUE AND TURN INTO DATE OBJECT???

// TODO VALIDATE INPUTS
   var birthday = new Date(req.body.birthday);
   console.log('created birthday:',birthday);

   var friend = new Friends({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birthday: birthday
   });
   console.log('new friend: ',friend);
   friend.save(function(err){
      if(err){
         console.log('error ${err}');
      }
      res.redirect('/');
   })
},
/*    PUT /friends/:id
//    Process editing a friend by ID.
// */
update: function (req, res){
   console.log('FRIEND->UPDATE - EDIT PROCESSING.....');

   Friends.findOne({_id: req.params.id}, function(err, friend){
      console.log('FRIENDS CONTROLLER: Found the friend to update! ',friend);
      var birthday = new Date(req.body.birthday);
      console.log('created birthday:',birthday);

      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = birthday;

       friend.save(function(err){
         if(err){
            console.log('error updating ${err}');
            }else{
               console.log('UPDATED FRIEND, NOW TO REDIRECT....');
            res.json(friend);
               }
         })
   })
},
/* DELETE /items/:id
   Process deleting an item by ID.
*/
delete: function (req, res){
   console.log('FRIEND->DESTROY');
   Friends.remove(
      {
         _id: req.params.id
      },
      function(err, data) {
      if(err){
         console.log('error ${err}');
      }else{
         res.redirect('/');
      }
   })
}
//,
//,
// ,
// /* POST
//    /items
//    Create a new item based on form submission.
// */
// create: function (req, res){
//    console.log('ITEM->CREATE');
//    var item = new Item({
//       name: req.body.name,
//       age: req.body.age
//    });
//    item.save(function(err){
//       if(err){
//          console.log('error ${err}');
//       }
//       res.redirect('/');
//    })
// },
// /*
//    GET /items
//    Form for creating a new item.
//    !! handled by routes !!
// */
// // app.get('/items', function (req, res){
// //    console.log('Create: form.');
// //    res.render('items');
// // });
//
// /*
//    GET /items/:id
//    View a single item by ID.
// */
// one: function (req, res){
//    console.log('ITEM->ONE');
//    Item.findOne(
//       {
//          _id: req.params.id
//       },
//       function(err, data) {
//       if(err){
//          console.log('error ${err}');
//       }else{
//          // SAME VIEW DISPLAYS ONE OR ALL
//          res.render('items',{ items: { data } });
//       }
//    })
// },
// /*

// /*
//    GET /items/edit/:id
//    Form to edit an item by ID.
// */
// edit: function (req, res){
//    console.log('ITEM->EDIT FORM');
//    Item.findOne(
//       {
//          _id: req.params.id
//       },
//       function(err, data) {
//          console.log('found to update: ',data);
//       if(err){
//          console.log('error ${err}');
//       }else{
//          var d = [data];
//          res.render('update', {items: d} );
//       }
//    })
// },
// /*
//    GET /items/destroy/:id
//    Form to destroy an item by ID.
// */
// destroy: function (req, res){
//    console.log('ITEM->DESTROY');
//    Item.remove(
//       {
//          _id: req.params.id
//       },
//       function(err, data) {
//       if(err){
//          console.log('error ${err}');
//       }else{
//          res.redirect('/');
//       }
//    })
// }

} // exports
