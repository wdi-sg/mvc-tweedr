CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);
CREATE TABLE IF NOT EXISTS tweeds (
    id SERIAL PRIMARY KEY,
    tweed TEXT,
    createdby_user INTEGER
);