
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
	  created_at DATE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    tweets TEXT,
    user_id INTEGER,
    created_at DATE DEFAULT now()
);

CREATE TABLE NOT EXISTS pictures (
		id SERIAL PRIMARY KEY,
		background_url TEXT,
		profile_url TEXT,
		user_id INTEGER
);