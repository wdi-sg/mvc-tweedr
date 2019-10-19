-- CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,username TEXT UNIQUE,password TEXT,email TEXT);
-- CREATE TABLE IF NOT EXISTS tweets (id SERIAL PRIMARY KEY,users_id INTEGER,content TEXT);
-- CREATE TABLE IF NOT EXISTS follows (id SERIAL PRIMARY KEY,users_id INTEGER,f_er_users_id INTEGER);



-- SELECT column_name(s)
-- FROM table1
-- INNER JOIN table2
-- ON table1.column_name = table2.column_name;

-- SELECT users.username AS username,users.id,tweets.users_id,tweets.content,fo,
-- FROM users INNER JOIN follows ON users.id = follows.f_er_users_id INNER JOIN tweets ON follows.users_id = tweets.users_id WHERE ;