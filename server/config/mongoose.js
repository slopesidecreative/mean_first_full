console.log('mongo connection, mongoose setup js loaded...');

var mongoose      =     require('mongoose');
var fs            =     require('fs');
var path          =     require('path');
var dburi         =     'mongodb://localhost/m_friends';
var root          =     __dirname;
var models_path   =     path.join(root, './../models');
var reg           =     new RegExp( ".js$", "i" );


mongoose.connect(dburi,function(){
   console.log('mongoose connected');
});
/*
*  If the connection throws an error
*/
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }` );
});
/*
*  When the connection is disconnected
*/
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected' );
});
/*
*  If the Node process ends, close the Mongoose connection
*/
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});

/*
*  Load Models: read all of the files in the models dir and
*  check if it is a javascript file before requiring it
*/
fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});


// read all of the files in the models_path and require (run) each of the javascript files
// fs.readdirSync(models_path).forEach(function(file) {
//   if(file.indexOf('.js') >= 0) {
//     require(models_path + '/' + file);
//   }
// })
