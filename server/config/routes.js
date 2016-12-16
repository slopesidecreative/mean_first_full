
console.log('routes.js is loaded.');

/* THE JOB OF ROUTES IS TO CALL THE CORRECT CONTRLLER METHOD BASED ON ROUTE */
var Friends =  require('../controllers/friends.js');
console.log('Friends conroller: ', Friends);

module.exports = function(app) {
   // "/"
   // Root - show all
   // TO BE HANDLED BY ANGULAR...
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
   app.put('/friends/:id', function (req, res){
      console.log('PUT PUT PUT update!!');
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

}
