CREATE TABLE
IF NOT EXISTS tweets
(
    ID SERIAL PRIMARY KEY,
    tweets TEXT,
    tweets_userid INTEGER
);

CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    user_intro TEXT
);