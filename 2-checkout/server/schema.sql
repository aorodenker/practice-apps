DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE userData (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  lineOne VARCHAR(100) NOT NULL,
  lineTwo VARCHAR(100),
  city VARCHAR(50) NOT NULL,
  state VARCHAR(20) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  ccNum VARCHAR(50) NOT NULL,
  exp VARCHAR(20) NOT NULL,
  cvv VARCHAR(3) NOT NULL,
  billZip VARCHAR(5) NOT NULL
);


INSERT INTO userData (name, username, password, email, lineOne, city, state, zip, phone, ccNum, exp, cvv, billZip)
VALUES ('Andrew Orodenker', 'aorodenker', 'pass123', 'andrew.orodenker@gmail.com', '123 Mango Drive', 'Kailua', 'HI', '96734', '8087799868', '123456789', '1992/03/16', '543', '93456');

-- {
--     "name": "Andrew Orodenker", "username": "aorodenker", "password": "pass123", "email": "andrew.orodenker@gmail.com",
--     "lineOne": "123 Mango Drive", "lineTwo": "Appartment: N/A", "city": "Kailua", "state": "HI", "zip": "96734", "phone": "8087799868",
--      "ccNum": "123456789", "exp": "1992/03/16", "cvv": "543", "billZip": "93456"
-- }

-- [
--   "Andrew Orodenker",
--   "andrew.orodenker@gmail.com",
--   "aorodenker",
--   "pass12345",
--   "14071 Mango Drive, Apartment",
--   "N/A",
--   "Del Mar",
--   "California",
--   "92014",
--   "8087799868",
--   "1235434543",
--   "03/22",
--   "123",
--   "97703"
-- ]