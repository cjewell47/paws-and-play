const mongoose  = require('mongoose');

const walkSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.ObjectId, ref: 'Dog' },
  available: [
    {
      type: Date
    }
  ],
  pending: [
    {
      type: Date
    }
  ],
  accepted: [
    {
      type: Date
    }
  ]
});


module.exports = mongoose.model('Walk', walkSchema);
