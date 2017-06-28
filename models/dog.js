const mongoose  = require('mongoose');

const dogSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  breed: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  size: {type: String },
  walks: [{
    date: Date,
    requests: [{
      walker: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }],
    accepted: { type: mongoose.Schema.ObjectId, ref: 'User' }
  }]
},{
  timestamps: true
});

module.exports = mongoose.model('Dog', dogSchema);
