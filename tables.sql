CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	profile_img TEXT DEFAULT 'https://www.pngkey.com/png/detail/325-3257134_flappy-bird-flappy-bird-sprite-png.png'
);

CREATE TABLE IF NOT EXISTS tweets (
	id SERIAL PRIMARY KEY,
	content TEXT,
	user_id INTEGER,
	created_at TIMESTAMP DEFAULT now()
);