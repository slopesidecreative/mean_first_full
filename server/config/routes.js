
console.log('routes.js is loaded.');

/* THE JOB OF ROUTES IS TO CALL THE CORRECT CONTRLLER METHOD BASED ON ROUTE */

var Friends =  require('../controllers/friends.js');
console.log('Friends conroller: ',Friends);

module.exports = function(app) {
   // "/"
   // Root - show all
   // TO BE HANDLED BY ANGULAR, right???
   app.get('/', function (req, res){
      res.json('welcome to FRIENDS');
   });
   // GET /friends
   // returns all friends
   app.get('/friends', function (req, res){
      console.log(' GET index /  ');
      Friends.index(req,res);
   });
   /* GET /friends/:id
      Show: view a single friend by ID.
   */
   app.get('/friends/:id', function (req, res){
      console.log('GET show /friends/:id ', req.params.id);
      Friends.show(req,res);
   });
   /* POST
      /items
      Create a new item based on form submission.
   */
   app.post('/friends', function (req, res){
      console.log('POST create /friends');
      Friends.create(req,res);
   });
   /*
      POST /items/:id
      PUT: process editing a friend by ID.
   */
   app.post('/friends/:id', function (req, res){
      console.log('POST update /items/update');
      Friends.update(req,res);
   });
   /*
      DELETE /friends/:id
      Delete: process deleting a friend by ID.
   */
   app.delete('/friends/:id', function (req, res){
      console.log('DELETE /friends/:id');
      Friends.delete(req,res);
   });

   // + app.get('/friends', friends.index);
   // + app.get('/friends/:id', friends.show);
   // + app.post('/friends', friends.create);
   // + app.put('/friends/:id', friends.update);
   // + app.delete('/friends/:id', friends.delete);

}

//    // "/"
//    // Root - show all
//    app.get('/', function (req, res){
//       res.json('welcome to the universe');
//       // console.log(' GET show /  ');
//       // Item.show(req,res);
//    });
//    /* POST
//       /items
//       Create a new item based on form submission.
//    */
//    app.post('/items', function (req, res){
//       console.log('POST /items');
//       Item.create(req,res);
//    });
//    /*
//       GET /items
//       Form for creating a new item.
//    */
//    app.get('/items', function (req, res){
//       console.log('GET /items');
//       res.render('items');
//    });
//    /*
//       GET /items/:id
//       View a single item by ID.
//    */
//    app.get('/items/:id', function (req, res){
//       console.log('GET one /items/:id ', req.params.id);
//       Item.one(req,res);
//    });
//    /*
//       POST /items/:id
//       Process editing an item by ID.
//    */
//    app.post('/items/update', function (req, res){
//       // pass the _id using hidden field in form
//       console.log('POST update /items/update');
//       // another way to update a record
//       Item.update(req,res);
//    });
//    /*
//       GET /items/edit/:id
//       Form to edit an item by ID.
//    */
//    app.get('/items/update/:id', function (req, res){
//       console.log('GET update /items/update/:id', req.params.id);
//       Item.edit(req,res);
//    });
//    /*
//       GET /items/destroy/:id
//       Form to destroy an item by ID.
//    */
//    app.get('/items/destroy/:id', function (req, res){
//       console.log('GET destroy /items/destroy/:id', req.params.id);
//       Item.destroy(req,res);
//    });
