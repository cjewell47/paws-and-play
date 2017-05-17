// const mongoose  = require('mongoose');
//
// const walkSchema = new mongoose.Schema({
//   owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
//   dog: { type: mongoose.Schema.ObjectId, ref: 'Dog' },
//   available: [
//     {
//       type: Date
//     }
//   ],
//   pending: [
//     {
//       date: { type: Date },
//       walker: { type: mongoose.Schema.ObjectId, ref: 'User' }
//     }
//   ],
//   accepted: [
//     {
//       date: { type: Date },
//       walker: { type: mongoose.Schema.ObjectId, ref: 'User' }
//     }
//   ]
// });
//
//
// module.exports = mongoose.model('Walk', walkSchema);
