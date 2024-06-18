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


// delete one data

// User.deleteOne({ name: "Kumar" }).then((res) => { console.log(res) }).catch((err) => { console.log(err) })


// DeleteMany

User.deleteMany({ _id: "666d6f7f1aa87963ed2201e9" }).then((res) => { console.log(res) }).catch((err) => { console.log(err) });