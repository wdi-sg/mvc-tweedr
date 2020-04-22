--psql -U zachariah -d tunr_db -a -f ./db/table-artist_data.sql

CREATE EXTENSION CITEXT;

CREATE TABLE IF NOT EXISTS users (
	id serial PRIMARY KEY,
	email CITEXT NOT NULL,
	password VARCHAR (64) NOT NULL,
	visits INTEGER DEFAULT 0
);

--

CREATE TABLE IF NOT EXISTS tweets (
	id serial PRIMARY KEY,
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	content VARCHAR NOT NULL,
	img_link VARCHAR
);