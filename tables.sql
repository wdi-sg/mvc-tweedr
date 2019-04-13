/*createdb DATABASE_NAME -U USERNAME
psql -d DATABASE_NAME -U USERNAME -f tables.sql*/

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);


CREATE TABLE IF NOT EXISTS tweets (
	id SERIAL PRIMARY KEY,
	tweets TEXT,
	users_id INTEGER
);