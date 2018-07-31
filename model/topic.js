const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const topicSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false }
});
 
 
module.exports = mongoose.model('Topic', topicSchema);
