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

var FriendSchema = new mongoose.Schema({
      first_name: {
        type: String,
        required: true,
        validate: nameValidator
      },
     last_name: {
        type: String,
        required: true,
        validate: nameValidator
     },
     birthday: {
        type: Date,
        required: true
     }
  }, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });

  var Friend = mongoose.model('Friend',FriendSchema);
