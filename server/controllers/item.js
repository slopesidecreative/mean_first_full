/* item controller */

var mongoose   = require('mongoose');
var moment     = require('moment');

var Item       = mongoose.model('Item');

module.exports = {
// "/"
// Root - show all
show: function (req, res){
   console.log('ITEM->SHOW');
   Item.find({}, function(err, data) {
      if(err){
         console.log('error ${err}');
      }else{
         res.render('index',{items:data});
      }
   })
},
/* POST
   /items
   Create a new item based on form submission.
*/
create: function (req, res){
   console.log('ITEM->CREATE');
   var item = new Item({
      name: req.body.name,
      age: req.body.age
   });
   item.save(function(err){
      if(err){
         console.log('error ${err}');
      }
      res.redirect('/');
   })
},
/*
   GET /items
   Form for creating a new item.
   !! handled by routes !!
*/
// app.get('/items', function (req, res){
//    console.log('Create: form.');
//    res.render('items');
// });

/*
   GET /items/:id
   View a single item by ID.
*/
one: function (req, res){
   console.log('ITEM->ONE');
   Item.findOne(
      {
         _id: req.params.id
      },
      function(err, data) {
      if(err){
         console.log('error ${err}');
      }else{
         // SAME VIEW DISPLAYS ONE OR ALL
         res.render('items',{ items: { data } });
      }
   })
},
/*
   POST /items/:id
   Process editing an item by ID.
*/
update: function (req, res){
   // pass the _id using hidden field in form
   console.log('ITEM->EDIT POST PROCESSING.....');
   // another way to update a record
   Item.findOne({_id: req.body._id}, function(err, item){
    item.name = req.body.name;
    item.age = req.body.age;
    item.save(function(err){
      if(err){
         console.log('error updating ${err}');
         }else{
         res.redirect('/');
            }
      })
   })
},
/*
   GET /items/edit/:id
   Form to edit an item by ID.
*/
edit: function (req, res){
   console.log('ITEM->EDIT FORM');
   Item.findOne(
      {
         _id: req.params.id
      },
      function(err, data) {
         console.log('found to update: ',data);
      if(err){
         console.log('error ${err}');
      }else{
         var d = [data];
         res.render('update', {items: d} );
      }
   })
},
/*
   GET /items/destroy/:id
   Form to destroy an item by ID.
*/
destroy: function (req, res){
   console.log('ITEM->DESTROY');
   Item.remove(
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

} // exports
