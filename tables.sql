CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    screen_name VARCHAR(35),
    password VARCHAR(64),
    avatar TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    userId INT REFERENCES users(id),
    tweetmsg VARCHAR(140),
    timestamp_col TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS following (
    userId INT REFERENCES users(id),
    followingId INT REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS followers (
    userId INT REFERENCES users(id),
    followerId INT REFERENCES users(id)
);