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
	folowee_id INTEGER
);