CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    email TEXT,
    photo TEXT,
	  created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tweets (
		id SERIAL PRIMARY KEY,
		tweet TEXT,
		user_id INTEGER,
		created_at TIME DEFAULT now()

)