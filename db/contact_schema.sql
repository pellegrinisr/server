DROP DATABASE IF EXISTS contact_db;
CREATE DATABASE contact_db;

USE contact_db;

CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL,
    message VARCHAR(500) NOT NULL
);