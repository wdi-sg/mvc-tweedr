CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    password TEXT,
    created_at TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    users_username TEXT,
    content TEXT,
    created_at TEXT,
    updated_at TEXT
);