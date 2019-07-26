CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    password Text,
    name TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_id INT
);

CREATE TABLE IF NOT EXISTS followers (
    id SERIAL PRIMARY KEY,
    user_id INT,
    follower_id INT

);