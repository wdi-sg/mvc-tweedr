CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    post TEXT,
    author_id INTEGER,
    date_posted TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS followers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    follower_user_id INTEGER
);