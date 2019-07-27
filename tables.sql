CREATE TABLE Account (
    username VARCHAR(32) PRIMARY KEY,
    password TEXT
);

CREATE TABLE Tweet (
    id SERIAL PRIMARY KEY,
    content TEXT,
    username VARCHAR(32) REFERENCES Account(username)
);
