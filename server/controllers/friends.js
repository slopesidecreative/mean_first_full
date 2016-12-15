console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    //your code here
    res.json({placeholder:'index'});
  };
  this.create = function(req,res){
    //your code here
    res.json({placeholder:'create'});
  };
  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController(); // what does this export?
