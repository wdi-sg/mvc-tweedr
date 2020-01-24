CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    passhash TEXT,
    UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS tweed (
    id SERIAL PRIMARY KEY,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    owner_id INTEGER
);

CREATE TABLE IF NOT EXISTS followers (
    id SERIAL PRIMARY KEY,
    followed_id INTEGER,
    follower_id INTEGER
);

CREATE TABLE IF NOT EXISTS users_profile (
    id SERIAL PRIMARY KEY,
    name TEXT,
    photo TEXT,
    description TEXT,
    address TEXT
);