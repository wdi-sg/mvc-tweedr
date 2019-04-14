INSERT INTO users
(username, cookie)
VALUES
('userone', 'dummy_cookie1');

INSERT INTO users
(username, cookie)
VALUES
('usertwo', 'dummy_cookie2');

INSERT INTO passwords
(user_hash, password_hash)
VALUES
('userone_hash', 'password1');

INSERT INTO passwords
(user_hash, password_hash)
VALUES
('usertwo_hash', 'password2');

INSERT INTO tweets
(user_id, tweet, date)
VALUES
('1', 'This is userone''s first tweet', '19th June 2019');

INSERT INTO tweets
(user_id, tweet, date)
VALUES
('1', 'This is userone''s second tweet', '20th June 2019');

INSERT INTO tweets
(user_id, tweet, date)
VALUES
('2', 'This is usertwo''s first tweet', '18th June 2019');

INSERT INTO tweets
(user_id, tweet, date)
VALUES
('2', 'This is usertwo''s second tweet', '21st June 2019');

INSERT INTO follow
(follower_id, followed_id)
VALUES
('1', '2');