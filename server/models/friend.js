/* friend model */
console.log('friends.js loaded');

var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];
var dateValidator = [
   validate({
      validator: 'isDate',
      message: 'Must be a valid date'
   })
];
var emailValidator = [
   validate({
      validator: 'isEmail',
      message: 'Must be a valid email address'
   })
];

// date rege
// (?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))


// date validator:
// typeof date.getMonth === 'function'

var FriendSchema = new mongoose.Schema({
      first_name: {
        type: String,
        required: true,
        trim: true,
        validate: nameValidator
      },
     last_name: {
        type: String,
        required: true,
        trim: true,
        validate: nameValidator
     },
     birthday: {
        type: Date,
        required: true
        // validation is done on the front end using the date picker
        ,
        validate: dateValidator
     }
  }, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });

  var Friend = mongoose.model('Friend',FriendSchema);
