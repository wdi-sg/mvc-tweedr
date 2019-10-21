CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  username TEXT UNIQUE,
  password TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  message TEXT
);

CREATE TABLE IF NOT EXISTS followers (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  follower_id TEXT
);

CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  sender_id INTEGER,
  recipient_id INTEGER,
  amount FLOAT
)
