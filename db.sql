DROP DATABASE IF EXISTS amazon_db;

CREATE DATABASE amazon_db;

USE amazon_db;

CREATE TABLE product (

  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,

  item_name VARCHAR(10) NOT NULL,

  category VARCHAR(10) NOT NULL,

  price INTEGER(200) NOT NULL,

  amount INTEGER(100) NULL,

  PRIMARY KEY(item_id)

);


INSERT INTO product (item_name, category, price, amount) VALUES ('phone', 'tech', 150, 100);
INSERT INTO product (item_name, category, price, amount) VALUES ('tv', 'tech', 100, 50);
INSERT INTO product (item_name, category, price, amount) VALUES ('pc', 'tech', 200, 80);
INSERT INTO product (item_name, category, price, amount) VALUES ('earbuds', 'tech', 50, 50);
INSERT INTO product (item_name, category, price, amount) VALUES ('hotdogs', 'food', 2, 100);
INSERT INTO product (item_name, category, price, amount) VALUES ('burgers', 'food', 3, 100);
INSERT INTO product (item_name, category, price, amount) VALUES ('chips', 'food', 1, 100);