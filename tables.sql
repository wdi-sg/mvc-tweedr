CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    username TEXT,
    tweet TEXT
);

CREATE TABLE IF NOT EXISTS users_tweets (
    id SERIAL PRIMARY KEY,
    username_id INTEGER,
    tweet_id INTEGER
);
