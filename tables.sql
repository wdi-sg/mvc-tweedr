CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
	);

CREATE TABLE relations(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	follower_user_id INTEGER
	);

CREATE TABLE tweets(
	id SERIAL PRIMARY KEY,
	tweet VARCHAR(280),
	user_id INTEGER,
	created_at TIMESTAMPTZ DEFAULT now()
	);