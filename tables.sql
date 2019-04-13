CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
id SERIAL PRIMARY KEY,
tweeds TEXT,
user_id INTEGER
);


-- user can tweet multiple entries. tweets can only exist to one user at any time.

-- CREATE TABLE IF NOT EXIST tweet_user (
-- );