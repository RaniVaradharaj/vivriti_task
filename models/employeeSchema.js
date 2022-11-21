const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  // user_id: {
  //   type: Number,
  //   required: true,
  //   unique:true
  // },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: Number,
    required:true
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required:true
  }
  
},{ timestamps: true });

module.exports = mongoose.model("employee", employeeSchema);
