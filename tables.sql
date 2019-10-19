CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  username TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  message TEXT
);