CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
	id SERIAL PRIMARY KEY,
	content TEXT,
	user_id INTEGER,
	hashtag_id INTEGER
);

CREATE TABLE IF NOT EXISTS followers (
	id SERIAL PRIMARY KEY,
	user_1_id INTEGER,
	user_2_id INTEGER
);

CREATE TABLE IF NOT EXISTS hashtags (
	id SERIAL PRIMARY KEY,
	hashtag TEXT
);

CREATE TABLE IF NOT EXISTS tweed_hashtag (
	id SERIAL PRIMARY KEY,
	tweed_id INTEGER,
	hashtag_id INTEGER
)