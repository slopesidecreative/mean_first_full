/* friends controller */
console.log('friends controller');

var mongoose   =  require('mongoose');
var moment     =  require('moment');

var Friend     =  mongoose.model('Friend');

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
