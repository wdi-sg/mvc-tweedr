DROP TABLE users;
DROP TABLE tweets;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE tweets (
	id SERIAL PRIMARY KEY,
	tweet TEXT,
	user_id INTEGER
);