
console.log('routes.js is loaded.');

var Item =  require('../controllers/item.js')

module.exports =  function(app) {

   app.get('/friends', friends.index);
   app.get('/friends/:id', friends.show);
   app.post('/friends', friends.create);
   app.put('/friends/:id', friends.update);
   app.delete('/friends/:id', friends.delete);

   // "/"
   // Root - show all
   app.get('/', function (req, res){
      res.json('welcome to the universe');
      // console.log(' GET show /  ');
      // Item.show(req,res);
   });
   /* POST
      /items
      Create a new item based on form submission.
   */
   app.post('/items', function (req, res){
      console.log('POST /items');
      Item.create(req,res);
   });
   /*
      GET /items
      Form for creating a new item.
   */
   app.get('/items', function (req, res){
      console.log('GET /items');
      res.render('items');
   });
   /*
      GET /items/:id
      View a single item by ID.
   */
   app.get('/items/:id', function (req, res){
      console.log('GET one /items/:id ', req.params.id);
      Item.one(req,res);
   });
   /*
      POST /items/:id
      Process editing an item by ID.
   */
   app.post('/items/update', function (req, res){
      // pass the _id using hidden field in form
      console.log('POST update /items/update');
      // another way to update a record
      Item.update(req,res);
   });
   /*
      GET /items/edit/:id
      Form to edit an item by ID.
   */
   app.get('/items/update/:id', function (req, res){
      console.log('GET update /items/update/:id', req.params.id);
      Item.edit(req,res);
   });
   /*
      GET /items/destroy/:id
      Form to destroy an item by ID.
   */
   app.get('/items/destroy/:id', function (req, res){
      console.log('GET destroy /items/destroy/:id', req.params.id);
      Item.destroy(req,res);
   });
}
