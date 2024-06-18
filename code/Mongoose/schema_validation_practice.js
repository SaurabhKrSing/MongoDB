const mongoose = require('mongoose')

main().then(() => {
     console.log("connected");
}).catch((err) => { console.log(err) });

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Schema

const bookschema = new mongoose.Schema({
     title: {
          type: String,
          required: true, // Validation Method
     },
     author: {
          type: String,
     },
     price: {
          type: Number,
     },
});

// models

const Book = mongoose.model("Book", bookschema);


// Insert Books Details

// Book.insertMany([
//      { "title": "Making India Awesome", "author": "Chetan Bhagat", "price": 200 },
//      { "title": "One Indian Girl", "author": "Chetan Bhagat", "price": 250 },
//      { "title": "Half Girlfriend", "author": "Chetan Bhagat", "price": 220 },
//      { "title": "Revolution 2020", "author": "Chetan Bhagat", "price": 240 },
//      { "title": "Naked Triangle", "author": "Balwant Gargi", "price": 180 },
//      { "title": "A Million Mutinies Now", "author": "V.S. Naipaul", "price": 300 },
//      { "title": "A Bend in the River", "author": "V.S. Naipaul", "price": 270 },
//      { "title": "A Brush with Life", "author": "Satish Gujral", "price": 320 },
//      { "title": "A Passage to England", "author": "Nirad C. Chaudhuri", "price": 210 },
//      { "title": "A House for Mr. Biswas", "author": "V.S. Naipaul", "price": 280 },
//      { "title": "A Prisoner’s Scrapbook", "author": "L.K. Advani", "price": 230 },
//      { "title": "A River Sutra", "author": "Gita Mehta", "price": 260 },
//      { "title": "A Call to Honour", "author": "Jaswant Singh", "price": 250 },
//      { "title": "A Sense of Time", "author": "H.S. Vatsyayan", "price": 200 },
//      { "title": "A Strange and Sublime Address", "author": "Amit Chaudhuri", "price": 210 },
// ]).then((res) => { console.log(res) }).catch((err) => { console.log(err) });


// Update

Book.findByIdAndUpdate("667071e7666a70df12cfae6c", { price: 900 }, { runValidators: true }).then((res) => { console.log(res) }).catch((err) => { console.log(err) })



