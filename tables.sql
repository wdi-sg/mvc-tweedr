CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  user_name TEXT,
  password TEXT,
  email TEXT
  )

CREATE TABLE IF NOT EXISTS tweeds(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  message TEXT,
  )

CREATE TABLE IF NOT EXISTS follows (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    follower_id TEXT,
  );
