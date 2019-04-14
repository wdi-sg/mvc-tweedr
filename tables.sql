CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER
);