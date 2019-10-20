-- CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,username TEXT UNIQUE,password TEXT,email TEXT);
-- CREATE TABLE IF NOT EXISTS tweets (id SERIAL PRIMARY KEY,users_id INTEGER,content TEXT);
-- CREATE TABLE IF NOT EXISTS follows (id SERIAL PRIMARY KEY,users_id INTEGER,f_er_users_id INTEGER);



-- SELECT column_name(s)
-- FROM table1
-- INNER JOIN table2
-- ON table1.column_name = table2.column_name;

-- SELECT users.username AS username,users.id AS users_id,tweets.content FROM users INNER JOIN follows ON users.id = follows.users_id INNER JOIN tweets ON follows.users_id = tweets.users_id WHERE follows.f_er_users_id=$1 OR ;

-- SELECT tweets.users_id AS users_id,users.username AS username,tweets.content FROM tweets INNER JOIN follows ON (follows.f_er_users_id = tweets.users_id) INNER JOIN users ON (users.id = follows.users_id) WHERE follows.users_id =

-- SELECT DISTINCT tweets.content, users.username, tweets.users_id FROM users INNER JOIN tweets ON (users.id = tweets.users_id) INNER JOIN follows ON (tweets.users_id = follows.f_er_users_id) WHERE follows.users_id =

-- SELECT DISTINCT tweets.content, users.username, tweets.users_id FROM users INNER JOIN tweets ON (users.id = tweets.users_id) INNER JOIN follows ON (tweets.users_id = follows.users_id) WHERE follows.f_er_users_id =$1