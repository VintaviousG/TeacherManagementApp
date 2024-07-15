const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String },
   
});

module.exports = mongoose.model('Subject', subjectSchema);