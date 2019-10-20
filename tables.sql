CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    tweet TEXT,
    user_id INTEGER
);

CREATE TABLE IF NOT EXISTS followers (
    id SERIAL PRIMARY KEY,
    followed_user_id INTEGER,
    follower_user_id INTEGER,
    UNIQUE (followed_user_id, follower_user_id)
);