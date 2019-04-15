CREATE TABLE IF NOT EXISTS tweeds (
	id SERIAL PRIMARY KEY,
	content TEXT,
	user_id INTEGER,
	date_col DATE DEFAULT now(),
	created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT,
	created_at TIMESTAMPTZ DEFAULT now(),
	profile_img TEXT DEFAULT 'https://www.pngkey.com/png/detail/175-1759824_sans-face-png-sans-pixel-art.png'
);