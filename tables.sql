CREATE TABLE
IF NOT EXISTS tweets
(
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    username TEXT,
    tweets TEXT
);

CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    email TEXT,
    username TEXT,
    password TEXT,
    hashedPassword TEXT
)
