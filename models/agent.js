var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agentSchema = new Schema({
  name: String,
  real_estate:   String,
  location: String,
  ratings: [{comment: String, date: {type: Date, default: Date.now}, user_id: Number, rating: Number}]
});

var Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;