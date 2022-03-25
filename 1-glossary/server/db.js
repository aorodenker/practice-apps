const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://127.0.0.1/glossary`, {useNewUrlParser: true});

const dbcon = mongoose.connection;

dbcon.once('open', () => {
  console.log('Connected to MongoDB successfully');
})

// 2. Set up any schema and models needed by the app
let wordSchema = new mongoose.Schema({
  word: {type: String, required: true, unique: true},
  definition: {type: String, required: true}
})

let wordModel = mongoose.model('wordModel', wordSchema);


// 3. Export the models
// 4. Import the models into any modules that need them
module.exports = wordModel;