CREATE TABLE Account (
    username VARCHAR(32) PRIMARY KEY,
    password TEXT
);

CREATE TABLE Tweet (
    id SERIAL PRIMARY KEY,
    content TEXT,
    username VARCHAR(32) REFERENCES Account(username),
    date_created TIMESTAMP DEFAULT now()
);

CREATE TABLE Follower (
    id SERIAL PRIMARY KEY,
    username VARCHAR(32) REFERENCES Account(username),
    follower VARCHAR(32) REFERENCES Account(username)
)