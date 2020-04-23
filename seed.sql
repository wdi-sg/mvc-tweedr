INSERT INTO users
(name, password, encryptPassword)
VALUES
('User1', 'Password', 'Something');

INSERT INTO users
(name, password, encryptPassword)
VALUES
('User2', 'Password', 'Something');

INSERT INTO users
(name, password, encryptPassword)
VALUES
('User3', 'Password', 'Something');


INSERT INTO tweets
(tweetsText)
VALUES
('Hello World');

INSERT INTO tweets
(tweetsText)
VALUES
('Hello Apple');

INSERT INTO tweets
(tweetsText)
VALUES
('Hello Three');

INSERT INTO tweets
(tweetsText)
VALUES
('Hello Four');

INSERT INTO tweets
(tweetsText)
VALUES
('Hello Five');

INSERT INTO tweets
(tweetsText)
VALUES
('Hello Six');

INSERT INTO hash
(hashText)
VALUES
('#Hello');

INSERT INTO hash
(hashText)
VALUES
('#Greeting');

INSERT INTO hash
(hashText)
VALUES
('#Number');

INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(1, 1);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(1, 2);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(1, 3);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(1, 4);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(1, 5);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(1, 6);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(2, 1);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(2, 2);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(2, 3);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(3, 4);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(3, 5);
INSERT INTO hash_tweets
(hash_id, tweets_id)
VALUES
(3, 6);

INSERT INTO users_followers
(user_id, follower_id)
VALUES
(1, 2);

INSERT INTO users_followers
(user_id, follower_id)
VALUES
(1, 3);

INSERT INTO users_followers
(user_id, follower_id)
VALUES
(2, 3);

INSERT INTO users_tweets
(user_id, tweets_id)
VALUES
(1, 1);

INSERT INTO users_tweets
(user_id, tweets_id)
VALUES
(1, 2);

INSERT INTO users_tweets
(user_id, tweets_id)
VALUES
(2, 3);

INSERT INTO users_tweets
(user_id, tweets_id)
VALUES
(2, 4);

INSERT INTO users_tweets
(user_id, tweets_id)
VALUES
(3, 5);

INSERT INTO users_tweets
(user_id, tweets_id)
VALUES
(3, 6);