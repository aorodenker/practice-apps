require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
let wordModel = require('../server/db');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(cors());

/*|||||||||||||||||||||||||||||||||||||ROUTES||||||||||||||||||||||||||||||||||||||||||||||||*/

//get all words
app.get('/glossary', (req, res) => {
  wordModel.find()
  .then(word => res.send((word)))
  .catch(err => res.status(500).send('Failed to get words, ' + err));
});

//add word
app.post('/glossary', (req, res) => {
  const wordInput = req.body.word;
  const defInput = req.body.definition
  const newWord = new wordModel({
    word: wordInput,
    definition: defInput
  })
  newWord.save()
  .then(() => res.send('Word added!'))
  .catch(err => res.status(500).send('Failed to add word, ' + err));
})

//delete a word
app.delete('/glossary', (req, res) => {
  console.log('deleted input: ' + req.body.word)
  wordModel.findOneAndDelete({word: req.body.word})
  .then(word => res.send('Word deleted: ' + word))
  .catch(err => res.status(500).send('Failed to delete word, ' + err))
})

//update a word
app.post('/glossary/edit', (req, res) => {
  console.log('REQ BODY FOR EDIT: ' + JSON.stringify(req.body))
  wordModel.findOneAndUpdate({word: req.body.word}, {definition: req.body.definition})
    .then(word => res.send('Word updated: ' + word))
    .catch(err => res.status(500).send('Failed to save updated word, ' + err))
})

app.listen(process.env.PORT, () => {
  console.log(`Listening http://localhost:${process.env.PORT}`);
});




//find a word
// app.get('/:word', (req, res) => {
//   wordModel.find({word: req.params.word})
//   .then(word => res.send(word))
//   .catch(err => res.status(500).send('Failed to find word, ' + err))
// })