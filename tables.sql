CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    cookie TEXT
);
CREATE TABLE IF NOT EXISTS passwords (
    id SERIAL PRIMARY KEY,
    user_hash TEXT,
    password_hash TEXT
);
CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    tweet TEXT,
    date TEXT
);
CREATE TABLE IF NOT EXISTS follow (
    id SERIAL PRIMARY KEY,
    follower_id TEXT,
    followed_id TEXT
);