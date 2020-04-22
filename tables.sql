CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	username TEXT,
	content TEXT
);

CREATE TABLE IF NOT EXISTS followers (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	follower_id INTEGER
);