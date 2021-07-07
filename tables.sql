CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT,
profile_desc VARCHAR(120),
profile_pic_url TEXT,
created_at TEXT
-- following TEXT,
-- followers TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
id SERIAL PRIMARY KEY,
tweeds TEXT,
created_at TEXT,
user_id INTEGER
);


-- user can tweet multiple entries. tweets can only exist to one user at any time.

-- CREATE TABLE IF NOT EXIST tweet_user (
-- );