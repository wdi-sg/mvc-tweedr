
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS tweet (
    id SERIAL PRIMARY KEY,
    tweet TEXT
);

CREATE TABLE IF NOT EXISTS user_tweets (
	id SERIAL PRIMARY KEY,
	user_id integer,
	tweet_id integer
);