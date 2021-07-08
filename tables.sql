CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	email TEXT,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS tweet (
	id SERIAL PRIMARY KEY,
	users_userid INTEGER,
	users_username TEXT,
	content TEXT
);

CREATE TABLE IF NOT EXISTS payment (
	id SERIAL PRIMARY KEY,
	sender_id INTEGER,
	recipient_id INTEGER,
	amount INTEGER
);