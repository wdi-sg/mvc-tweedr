CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
		id SERIAL PRIMARY KEY,
		content TEXT,
		user_id INTEGER,
		hash_id INTEGER
);

CREATE TABLE IF NOT EXISTS hash (
		id SERIAL PRIMARY KEY,
		content TEXT
);

CREATE TABLE IF NOT EXISTS tweetHash (
		id SERIAL PRIMARY KEY,
		tweet_id INTEGER,
		hash_id INTEGER
);

CREATE TABLE IF NOT EXISTS tweetHash (
		id SERIAL PRIMARY KEY,
		tweet_id INTEGER,
		hash_id INTEGER
);

CREATE TABLE IF NOT EXISTS likes (
		id SERIAL PRIMARY KEY,
		tweet_id INTEGER,
		user_id INTEGER
);