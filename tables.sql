CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS tweedr (
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    tweedr_msg TEXT
);