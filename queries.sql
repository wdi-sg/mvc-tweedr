-- SELECT tweets.tweet_id, users.handle AS handle, tweets.body
-- FROM tweets
-- INNER JOIN users_followers ON users_followers.leader_id = tweets.tweeted_by
-- INNER JOIN users ON users_followers.leader_id = users.user_id
-- WHERE follower_id = 1;

-- UPDATE users SET  dp_url = 'https:
-- //ca.slack-edge.com/T0351JZQ0-U04TM809P-896e7c01a217-512' WHERE user_id = 2;

-- UPDATE users SET  dp_url = 'https:
-- //ca.slack-edge.com/T0351JZQ0-UQSQEP9HA-gda3438b5dca-512' WHERE user_id = 3;

UPDATE users SET hashed_pw = '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824' WHERE user_id =1;

UPDATE users SET hashed_pw = '866ab33b8463db1b3906ff42fe1112bb52aaca7c4ae0d82275413ba672a40ee7' WHERE user_id =2;

UPDATE users SET hashed_pw = '23fcdb6131545fd0a457d8b14303456ce73e457d547595016539aacc6cc322ed' WHERE user_id =3;
