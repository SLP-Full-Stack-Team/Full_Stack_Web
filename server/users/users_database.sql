CREATE DATABASE shelearns;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_firstName VARCHAR(255),
    user_lastName VARCHAR(255),
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_pswd VARCHAR(255)
);
