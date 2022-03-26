const mysql = require("mysql2");
const {connection} = require('./db.js');



  //insert a user
  let userInsert = (body, res) => {
    connection.query(
    'INSERT INTO userData (name, username, password, email, lineOne, lineTwo, city, state, zip, phone, ccNum, exp, cvv, billZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [body.data[0], body.data[1], body.data[2], body.data[3], body.data[4], body.data[5], body.data[6], body.data[7], body.data[8], body.data[9], body.data[10], body.data[11], body.data[12], body.data[13]], (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send('Inserted user info successfully:' + body[0])
      }
    })
  };
  //get single user data
  let userFind = (body, res) => {
    console.log(body)
    //destructure body first here
    //
    //get name
    connection.query('SELECT * FROM userData WHERE name = ? LIMIT 1', [body.name], (err, data) => {
      if (err) {
        res.status(500).send('Error selecting user: '+ name)
      } else {
        res.status(200).send('Successfully found user: '+ JSON.stringify(data))
      }
    })
  };

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
module.exports = {userInsert, userFind}