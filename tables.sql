CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
	  created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tweeds (
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_id INTEGER
);