const { Schema, model }  = require('mongoose');

const LogSchema = new Schema({
  url: String,
  body: String,
  params: String,
  query: String,
  method: String
}, {
  timestamps: true
});

module.exports = model('Log', LogSchema);