CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password varchar
);

CREATE TABLE IF NOT EXISTS tweeds (
    id SERIAL PRIMARY KEY,
    message TEXT,
    message_date TIMESTAMPTZ default now(),
    user_id INTEGER
);


CREATE TABLE IF NOT EXISTS hashtags (
    id SERIAL PRIMARY KEY,
    hashtag TEXT
);

CREATE TABLE IF NOT EXISTS favourites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    tweed_id INTEGER
);
