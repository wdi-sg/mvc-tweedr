CREATE TABLE IF NOT EXIST users (
id SERIAL PRIMARY KEY,
user_id TEXT,
password TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
id SERIAL PRIMARY KEY,
users_id INTEGER,
tweet TEXT
);