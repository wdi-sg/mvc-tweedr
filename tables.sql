CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    password TEXT,
    picture BYTEA
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    message TEXT,
    photo_url TEXT,
    raw_photo BYTEA,
    user_id INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS follows (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    follower_id INTEGER UNIQUE
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
