CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT, 
	password TEXT, 
	NAME TEXT,
	PHOTO TEXT,
	AGE INT
);

CREATE TABLE IF NOT EXISTS tweeds (
	id SERIAL PRIMARY KEY,
	user_id INT,
	tweed TEXT,
	created_at TIMESTAMP,
	updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users_followers (
	id SERIAL PRIMARY KEY,
	user_id INT,
	follower_id INT
);

