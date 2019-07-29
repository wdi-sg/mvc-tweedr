CREATE TABLE IF NOT EXISTS users (
    userid SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    user_id INT,
    content TEXT
);

CREATE TABLE IF NOT EXISTS user_followers (
    id SERIAL PRIMARY KEY,
    user_id INT,
    follower_id INT
);