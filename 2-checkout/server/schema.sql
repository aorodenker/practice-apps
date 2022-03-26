
DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

CREATE TABLE userData (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE addressData (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  lineOne VARCHAR(100) NOT NULL,
  lineTwo VARCHAR(100),
  city VARCHAR(50) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INT(5) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  FOREIGN KEY(user_id) REFERENCES userData(user_id)
);

CREATE TABLE billingData (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  ccNum INT NOT NULL,
  exp DATE NOT NULL,
  cvv INT(3) NOT NULL,
  billZip INT(5) NOT NULL,
  FOREIGN KEY(user_id) REFERENCES userData(user_id)
);


INSERT INTO userData (name, username, password, email) VALUES ('Andrew Orodenker', 'aorodenker', 'pass123', 'andrew.orodenker@gmail.com');
INSERT INTO userData (name, username, password, email) VALUES ('Varun S', 'varuns', '123pass', 'varun.sri@gmail.com');
INSERT INTO userData (name, username, password, email) VALUES ('Sean Trinh', 'seantrinh22', 'sean123', 'sean.trinh@gmail.com');

INSERT INTO addressData (lineOne, city, state, zip, phone) VALUES ('123 Mango Drive', 'Kailua', 'HI', 96734, '8087799868');
INSERT INTO addressData (lineOne, city, state, zip, phone) VALUES ('32 Line Lane', 'Bend', 'OR', 97703, '4213435468');
INSERT INTO addressData (lineOne, city, state, zip, phone) VALUES ('653 Peanut Loop', 'San Diego', 'CA', 96734, '5693953453');

INSERT INTO billingData (ccNum, exp, cvv, billZip) VALUES (123456789, '1992/03/16', 543, 93456);
INSERT INTO billingData (ccNum, exp, cvv, billZip) VALUES (432567987, '2022/05/22', 123, 98765);
INSERT INTO billingData (ccNum, exp, cvv, billZip) VALUES (782125476, '1993/11/01', 678, 12345);