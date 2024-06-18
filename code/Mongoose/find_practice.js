const mongoose = require('mongoose');

main().then(() => {
     console.log("connected");
}).catch((err) => { console.log(err) });

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema

const userschema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number,
});

// models

const User = mongoose.model("User", userschema);


// Find All Data

// User.find({})
//      .then((res) => { console.log(res) })
//      .catch((err) => { console.log(err) });


// Find One data

// User.find({ age: { $gte: 24 } })
//      // .then((res) => { console.log(res) })
//      .then((res) => { console.log(res[0].name) })
//      .catch((err) => { console.log(err) });

// Find one ()

User.findOne({ age: { $gt: 20 } }).then((res) => { console.log(res) }).catch((err) => { console.log(err) })