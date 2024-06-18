const { default: mongoose } = require("mongoose");

const userschema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number,
});