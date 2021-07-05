CREATE TABLE  users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(35),
        password VARCHAR(64),
        profile TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    userId INT REFERENCES users(id),
    tweetmsg VARCHAR(140),
    created TIMESTAMP DEFAULT now()
);


