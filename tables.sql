CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
	id SERIAL PRIMARY KEY,
	tweet TEXT,
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS following (
	id SERIAL PRIMARY KEY,
	follower_id INTEGER,
	followee_id INTEGER
);

CREATE TABLE IF NOT EXISTS favourites (
	id SERIAL PRIMARY KEY,
	users_id INTEGER,
	tweets_id INTEGER
);

CREATE TABLE IF NOT EXISTS hashtags (
	id SERIAL PRIMARY KEY,
	tags TEXT
);

CREATE TABLE IF NOT EXISTS hashtags_tweets (
	id SERIAL PRIMARY KEY,
	tags_id INTEGER,
	tweets_id INTEGER
);