-- CREATE DATABASE burgers_db;

-- USE burgers_db;

-- CREATE TABLE burgers (
-- 	id INT (10) AUTO_INCREMENT NOT NULL,
--     burger_name VARCHAR (100) NOT NULL,
--     devoured BOOLEAN,
--     date TIMESTAMP,
--     PRIMARY KEY (id)
-- );

create database burger_db;
use burger_db;
create table burgers (
id int NOT NULL auto_increment,
burger_name varchar (255) NOT NUll,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);