const { Schema, model }  = require('mongoose');

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tasks: [
    String
  ]
}, {
  timestamps: true
});

module.exports = model('Project', ProjectSchema);