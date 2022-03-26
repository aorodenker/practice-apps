const mysql = require("mysql2");
const express = require("express"); //maybe dont need
const app = express(); //maybe dont need
require("dotenv").config();


const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//insert user
// let userInsert = con.query(
//   'INSERT INTO userData (name, username, password, email) VALUES (?, ?, ?, ?',
//   [name, username, password, email], (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send('Inserted user info successfully')
//     }
//   }
// );

// //insert address
// let addressInsert = con.query(
//   'INSERT INTO addressData (lineOne, lineTwo, city, state, zip, phone) VALUES (?, ?, ?, ?, ?, ?',
//   [lineOne, lineTwo, city, state, zip, phone], (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send('Inserted address info successfully')
//     }
//   }
// );

// //insert billing
// let billInsert = con.query(
//   'INSERT INTO billingData (ccNum, exp, cvv, billZip) VALUES (?, ?, ?, ?',
//   [ccNum, exp, cvv, billZip], (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send('Inserted billing info successfully')
//     }
//   }
// );

// //find a users info
// let findUser = con.query(
//   'SELECT id FROM userData WHERE username = ? LIMIT 1', [username],
//   (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(data)
//     }
//   }
// );

// //find address info
// let findAddress = con.query(
//   'SELECT id FROM addressData WHERE address_id = ?', [address_id],
//   (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(data)
//     }
//   }
// );

// //find billing info
// let findBilling = con.query(
//   'SELECT id FROM billingData WHERE billing_id = ?', [billing_id],
//   (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(data)
//     }
//   }
// );

// //delete user
// let deleteUser = con.query(
//   'DELETE FROM userData WHERE id = ?', [id], (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(`Successfully deleted user at: ${id}`)
//     }
//   }
// );

// //delete address
// let deleteAddress = con.query(
//   'DELETE FROM addressData WHERE address_id = ?', [id], (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(`Successfully deleted address at: ${id}`)
//     }
//   }
// );

// //delete billing
// let deleteBilling = con.query(
//   'DELETE FROM billingData WHERE billing_id = ?', [id], (err, data) => {
//     if (err) {
//       res.status(500).send(err)
//     } else {
//       res.status(200).send(`Successfully deleted billing at: ${id}`)
//     }
//   }
// );