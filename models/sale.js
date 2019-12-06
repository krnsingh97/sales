const mongoose = require('mongoose');

// const Answers = Object.freeze({
//   Yes: 'yes',
//   No: 'no',
// });

// Our Schema
const SurveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
 
  choices: {
    type: String,
    enum: ['YES', 'NO'],
    required: false
  },
  
  
  status:
   {
     type: String, 
     required: true, 
     enum: ['Access', 'Denied'],
     default: 'Access'
    },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Survey', SurveySchema);
