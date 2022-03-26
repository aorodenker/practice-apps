require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const db = require("./db");
const app = express();
const cors = require('cors');
const method = require('./serverMethods.js');


app.use(cors());
app.use(express.json());
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//get user info
app.get('/checkout', (req, res) => {
  //get stuff
});

//create new user
app.post('/checkout', (req, res) => {
  //send stuff
});

//edit a user
app.post('/checkout/edit', (req, res) => {
  //edit stuff
});

//delete info
app.delete('/checkout', (req, res) => {
  //delete stuff
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
