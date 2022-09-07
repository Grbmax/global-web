CREATE DATABASE global;
USE global;

CREATE TABLE newsletter (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(45)
);

CREATE TABLE appointment (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    contact VARCHAR(45) NOT NULL
);

INSERT INTO newsletter(email) VALUES ('user@gmail.com');
INSERT INTO appointment(username, email, contact) VALUES ('Gaurav','grbmax@gmail.com','8007035533');