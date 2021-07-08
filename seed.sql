INSERT INTO users
(username, password)
VALUES
('test', 'password'), ('apple', '12345');

INSERT INTO tweets
(username, tweet)
VALUES
('test', 'testing 123'), ('test', 'peanut butter'), ('apple', 'i hate apple pie');

INSERT INTO users_tweets
(username_id, tweet_id)
VALUES
(1, 1), (1, 2), (2, 1);