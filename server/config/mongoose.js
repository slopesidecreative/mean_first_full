var mongoose =  require('mongoose');

var fs = require('fs');
// require path for getting the models path
var path = require('path');

var db = 'mongodb://localhost/basic_mongoose';

mongoose.connect(db,function(){
   console.log('mongoose connected');
});

var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
})
