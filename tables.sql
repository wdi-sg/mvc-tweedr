CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);
CREATE TABLE tweets(
    id SERIAL PRIMARY KEY,
    tweet TEXT
);