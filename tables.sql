CREATE DATABASE tweedrdb;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT
);

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    tweet TEXT,
    user_id INTEGER,
    date_created DATE
);
