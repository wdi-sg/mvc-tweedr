CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
);
CREATE TABLE IF NOT EXISTS tweets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  content TEXT
);