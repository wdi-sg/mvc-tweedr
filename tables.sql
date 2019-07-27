CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    email TEXT,
    photo TEXT,
	  created_at DATE DEFAULT now()
);