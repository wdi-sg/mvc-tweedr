CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT, password TEXT);

CREATE TABLE IF NOT EXISTS tweets (id SERIAL PRIMARY KEY, tweetbody TEXT, users_id INTEGER);

-- Show all tweets
SELECT users.username, tweets.tweetbody
FROM users
ON users.id = tweets.users_id;

-- Find tweets from ID number
SELECT users.username, tweets.tweetbody
FROM users INNER JOIN tweets
ON users.id = tweets.users_id
WHERE users.id = 3 ;