const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const discussionSchema = new Schema({
  title: { type: String, required: true },
  topics: [
        {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic'
    }
  ]
}, { collection : 'discussion' });
 
const Discussion = mongoose.model('Discussion', discussionSchema);
 
module.exports = Discussion;