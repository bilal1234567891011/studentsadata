const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/data",{ useNewUrlParser: true });

// Model of collection
const Student= mongoose.model("Student", {
  id:String,
  Name: String, 
  Dob: Date,
  selects: String,
  gender: String,
  Division:String,

});

module.exports = {
  Student
  };