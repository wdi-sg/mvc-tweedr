CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);


CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    name_id INTEGER,
    post TEXT
);