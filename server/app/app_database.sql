CREATE DATABASE shelearns;

CREATE TABLE uploads(
    upload_id SERIAL PRIMARY KEY,
    upload_title VARCHAR(255),
    upload_description VARCHAR(255)
);

ALTER TABLE uploads 
    ADD upload_time TIMESTAMP DEFAULT NOW();

-- ALTER TABLE uploads 
--     ADD upload_img BYTEA;


