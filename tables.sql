CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT

);

CREATE TABLE IF NOT EXISTS tweets (
	id SERIAL PRIMARY KEY,
	content TEXT,
	userid INTEGER
);

CREATE TABLE IF NOT EXISTS follows (
	user_id INTEGER,
	follower_id INTEGER
);