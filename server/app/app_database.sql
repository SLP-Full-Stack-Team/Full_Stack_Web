CREATE DATABASE shelearns;

CREATE TABLE uploads(
    upload_id SERIAL PRIMARY KEY,
    upload_title VARCHAR(255),
    upload_description VARCHAR(255)
);

