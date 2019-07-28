CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    message TEXT,
    user_id INTEGER,
    creationInfo TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);