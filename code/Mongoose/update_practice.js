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

// update one

// User.updateOne({ name: "Kumar" }, { age: 30 }).then((res) => { console.log(res) }).catch((err) => { console.log(err) });

// update Many

// User.updateMany({ age: { $lt: 21 } }, { age: 30 }).then((res) => { console.log(res) }).catch((err) => { console.log(err) });

// findOneAndUpdate()

User.findOneAndUpdate({ name: "Saurabh" }, { age: 24 }, { new: true }).then((res) => { console.log(res) }).catch((err) => { console.log(err) });