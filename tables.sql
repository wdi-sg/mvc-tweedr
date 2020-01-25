CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE,
  password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
  id SERIAL PRIMARY KEY,
  tweets text,
  users_id INTEGER
);

CREATE TABLE IF NOT EXISTS user_follower (
	id SERIAL PRIMARY KEY,
	user_id INTEGER, 
	follower_id INTEGER 
);

