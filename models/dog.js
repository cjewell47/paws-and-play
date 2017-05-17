const mongoose  = require('mongoose');

const dogSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  walk: { type: mongoose.Schema.ObjectId, ref: 'Walk' },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  size: {type: String }
},{
  timestamps: true
});

module.exports = mongoose.model('Dog', dogSchema);
