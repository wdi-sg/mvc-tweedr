INSERT INTO users (username, password) VALUES ('teo', 'teo');

INSERT INTO users (username, password) VALUES ('chang', 'chang');

INSERT INTO users (username, password) VALUES ('hao', 'hao');


INSERT INTO tweets (user_id, tweets) VALUES(1, 'HAHAHA');
INSERT INTO tweets (user_id, tweets) VALUES(1, 'HOHOHO');
INSERT INTO tweets (user_id, tweets) VALUES(1, 'HEHEHEH');

INSERT INTO tweets (user_id, tweets) VALUES(2, 'HELLO');
INSERT INTO tweets (user_id, tweets) VALUES(2, 'HOW ARE YOU ');
INSERT INTO tweets (user_id, tweets) VALUES(2, 'GOOD BYE');

INSERT INTO tweets (user_id, tweets) VALUES(3, 'Pleasant Day');
INSERT INTO tweets (user_id, tweets) VALUES(3, 'Horrible Day');
INSERT INTO tweets (user_id, tweets) VALUES(3, 'Wonderful Day');


SELECT users.username, tweets.tweets, tweets.user_id FROM users INNER JOIN tweets ON users.id = tweets.user_id WHERE tweets.user_id = 3;



-- THIS CALLS the usernames and tweets yo
-- INSERT INTO tweets (
-- 	(user_id, )
-- )


-- CREATE TABLE IF NOT EXISTS tweets (
-- 	id SERIAL PRIMARY KEY,
-- 	user_id INTEGER,
-- 	tweets TEXT
-- );