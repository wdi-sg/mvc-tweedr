CREATE TABLE IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    createdDate TEXT
);

CREATE TABLE IF NOT EXISTS tweets
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    content TEXT,
    likes INTEGER,
    createdDate TEXT,
    editedDate TEXT
);

CREATE TABLE IF NOT EXISTS followers
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    follower_user_id INTEGER,
    followedDate TEXT,
    unFollowDate TEXT
);