CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);


CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    tweets TEXT,
    user_id TEXT
);