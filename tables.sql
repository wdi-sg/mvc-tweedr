CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE tweeds (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    username TEXT,
    content TEXT
);

CREATE TABLE followers (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	follower_id INTEGER
);