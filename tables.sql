CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password varchar
);

CREATE TABLE IF NOT EXISTS tweeds (
    id SERIAL PRIMARY KEY,
    message TEXT,
    message_date TIMESTAMPTZ
);