/* friend model */
console.log('friends.js loaded');

var mongoose = require('mongoose');
// schema (no validations)
var FriendSchema = new mongoose.Schema({
 first_name: String,
 last_name: String,
 birthday: Date
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} });
// register model
var Friend = mongoose.model('Friend',FriendSchema);

// VALIDATIONS:
// var CommentSchema = new mongoose.Schema({
//       _post: {
//          type: mongoose.Schema.Types.ObjectId,
//          ref: 'Post'
//       },
//      name: {
//         type: String,
//         required: true,
//         validate: nameValidator
//      },
//      content: {
//         type: String,
//         required: true,
//         validate: postValidator
//      }
//   }, {timestamps:true });
