CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username TEXT,
	hashPassword TEXT
);

CREATE TABLE IF NOT EXISTS tweeds(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	content TEXT
);

CREATE TABLE IF NOT EXISTS following(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	following_id INTEGER
);