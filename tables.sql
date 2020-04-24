CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    encryptPassword TEXT
);
CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    tweetsText TEXT
);
CREATE TABLE IF NOT EXISTS hash (
    id SERIAL PRIMARY KEY,
    hashText TEXT
);
CREATE TABLE IF NOT EXISTS users_followers(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	follower_id INTEGER
);

CREATE TABLE IF NOT EXISTS users_tweets(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	tweets_id INTEGER
);

CREATE TABLE IF NOT EXISTS favorites(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	tweets_id INTEGER
);


CREATE TABLE IF NOT EXISTS hash_tweets(
	id SERIAL PRIMARY KEY,
	hash_id INTEGER,
	tweets_id INTEGER
);