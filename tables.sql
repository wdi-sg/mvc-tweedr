CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  userName TEXT,
  password TEXT
);


CREATE TABLE IF NOT EXISTS tweeds (
  id SERIAL PRIMARY KEY,
  tweed TEXT,
  hashtag TEXT,
  user_id TEXT
);