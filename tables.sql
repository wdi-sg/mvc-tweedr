CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  hashedpassword TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
  id SERIAL PRIMARY KEY,
  message TEXT,
  user_id INTEGER
)
