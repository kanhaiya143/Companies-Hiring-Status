const mongoose = require('mongoose');


const CompanySchema = new mongoose.Schema({
  
  Name:{
    type: String,
    required: [true, 'Please add a name'],
  },
  Status:{
    type: String,
    required: [true, 'Please add a Mobile no'],
  },
  Type:{
    type: String,
  },
  Role:{
    type: String,
    required: [true, 'Please add a username'],
  },
  Country:{
    type: String,
    required: [true, 'Please add a password'],
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});




module.exports = mongoose.model('Company', CompanySchema);
