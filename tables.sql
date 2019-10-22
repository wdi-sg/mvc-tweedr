CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username TEXT,
	hashPassword TEXT
);

CREATE TABLE IF NOT EXISTS tweeds(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	content TEXT
);

CREATE TABLE IF NOT EXISTS following(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	following_id INTEGER
);

CREATE TABLE IF NOT EXISTS payments (
    transaction_id SERIAL PRIMARY KEY,
    sender_id INTEGER,
    sender_username TEXT,
    recipient_id INTEGER,
    recipient_username TEXT,
    amount FLOAT,
    payment_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);