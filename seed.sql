INSERT INTO users (username, password) VALUES ('user001', 'userpassword001') RETURNING *;

INSERT INTO tweets (tweetContent, user_id) VALUES ('Choose joy.', 1) RETURNING *;
INSERT INTO tweets (tweetContent, user_id) VALUES ('Do or do not, there is no try.', 1) RETURNING *;