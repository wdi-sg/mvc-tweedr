CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	message TEXT
);

CREATE TABLE IF NOT EXISTS tweets_hashtags (
	id SERIAL PRIMARY KEY,
	tweet_id INTEGER,
	hashtag_id INTEGER
);

CREATE TABLE IF NOT EXISTS hashtags (
	id SERIAL PRIMARY KEY,
	hashtag TEXT
);

CREATE TABLE IF NOT EXISTS favorites (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	tweet_id INTEGER
);