/*createdb DATABASE_NAME -U USERNAME
psql -d DATABASE_NAME -U USERNAME -f tables.sql*/

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);


CREATE TABLE IF NOT EXISTS tweeds (
	id SERIAL PRIMARY KEY,
	tweeds TEXT,
	users_id INTEGER
);


CREATE TABLE IF NOT EXISTS followers (
	id SERIAL PRIMARY KEY,
	users_id INTEGER,
	followers_users_id INTEGER
);