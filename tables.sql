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