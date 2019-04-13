CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name TEXT,
password TEXT,
pic TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
id SERIAL PRIMARY KEY,
message TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
photo_attached TEXT,
user_id INTEGER
);

CREATE TABLE IF NOT EXISTS followers (
user_id INTEGER,
followers_user_id INTEGER
);