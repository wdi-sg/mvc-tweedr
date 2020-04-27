CREATE TABLE IF NOT EXISTS users(
	user_id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT

);
CREATE TABLE IF NOT EXISTS tweets(
	tweet_id SERIAL PRIMARY KEY,
	user_id INTEGER,
	message TEXT
);

CREATE TABLE IF NOT EXISTS hashtags (
	id SERIAL PRIMARY KEY,
	content TEXT
);