const mongoose = require('mongoose');

main().then(() => {
     console.log("Connnection Successfully");
}).catch(err => console.log(err));

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


// Create Schema

const userschema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number,
});

// Create Models

const User = mongoose.model("User", userschema);

// insert One by One Data

// const user1 = new User({
//      name: "Saurabh",
//      email: "saurabhkumar.sant@gmail.com",
//      age: 22,
// })

// user1.save();

// const user2 = new User({
//      name: "Kumar",
//      email: "kumar@gmail.com",
//      age: 23,
// })

// user2.save().then((res) => {
//      console.log(res)
// }).catch(err => { console.log(err) });



// Insert Multiple Data 

User.insertMany([
     { name: "Tony", email: "tony@gmail.com", age: 20 },
     { name: "Bruce", email: "bruce@gmail.com", age: 25 },
     { name: "Peter", email: "peter@gmail.com", age: 26 }
]).then((res) => {
     console.log(res);
}).catch((err) => {
     console.log(err);
});