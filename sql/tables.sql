DROP TABLE IF EXISTS tweets;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
  salt TEXT
);

CREATE TABLE tweets (
  id SERIAL PRIMARY KEY,
  content VARCHAR(140),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
