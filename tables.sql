CREATE TABLE IF NOT EXISTS users {
	id SERIAL PRIMARY KEY,
	password TEXT,
	name TEXT
};

CREATE TABLE IF NOT EXISTS tweeds {
	id SERIAL PRIMARY KEY,
	user_tweeds TEXT,
	user_id INT,
	create_at TIMESTAMP DEFAULT now()
};

CREATE TABLE IF NOT EXISTS followers {
	id SERIAL PRIMARY KEY,
	user_id INT,
	follower_id INT
};