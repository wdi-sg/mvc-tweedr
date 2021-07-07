CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    profilename TEXT,
    email TEXT,
    photo TEXT,
	  created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tweets (
		tweetid SERIAL PRIMARY KEY,
		tweet TEXT,
		user_id INTEGER,
		created_at TIME DEFAULT now()
);

CREATE TABLE IF NOT EXISTS school (
		schoolid SERIAL PRIMARY KEY,
		school TEXT,
		education TEXT,
		user_id INTEGER,
		created_at TIME DEFAULT now()
);

CREATE TABLE IF NOT EXISTS work (
		workid SERIAL PRIMARY KEY,
		work TEXT,
		workcompany TEXT,
		user_id INTEGER,
		created_at TIME DEFAULT now()
);

CREATE TABLE IF NOT EXISTS photo (
		photoid SERIAL PRIMARY KEY,
		photoname TEXT,
		user_id INTEGER,
		created_at TIME DEFAULT now()
);