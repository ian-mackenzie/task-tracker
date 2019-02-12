'use strict';

const mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: { type: String, required: true },
  content: { type: String, required: true, default: '' },
  imagePath: { type: String },
  start: { type: Date, default: Date.now() },
  end: { type: Date, default: Date.now() + 1000 * 60 * 60 },
  completed: boolean
});

module.exports = mongoose.model('Task', taskSchema);