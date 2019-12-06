const mongoose = require('mongoose');

// const Answers = Object.freeze({
//   Yes: 'yes',
//   No: 'no',
// });

// Our Schema
const SaleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
  price:
   {
     type: Number, 
     required: true, 
    },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Sale', SaleSchema);
