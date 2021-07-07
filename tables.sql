CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username TEXT UNIQUE,
	password TEXT,
	image TEXT
);


CREATE TABLE IF NOT EXISTS tweeds(
	id SERIAL PRIMARY KEY,
	tweed TEXT,
	users_id INTEGER,
	created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS followers(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	followers_user_id INTEGER
);