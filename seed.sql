/* INSERT INTO USERS TABLE */
INSERT INTO users (username, password) VALUES ('user1', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
INSERT INTO users (username, password) VALUES ('user2', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
INSERT INTO users (username, password) VALUES ('user3', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
INSERT INTO users (username, password) VALUES ('user4', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');
INSERT INTO users (username, password) VALUES ('user5', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92');

/* INSERT INTO TWEETS TABLE */
INSERT INTO tweets (tweet, user_id) VALUES ('I am a tweet.', '1');
INSERT INTO tweets (tweet, user_id) VALUES ('I am also a tweet.', '1');
INSERT INTO tweets (tweet, user_id) VALUES ('I, too am a tweet.', '2');
INSERT INTO tweets (tweet, user_id) VALUES ('I am a tweet tweet.', '2');
INSERT INTO tweets (tweet, user_id) VALUES ('I am a tweet tweet TWEET. How bout that?', '3');
INSERT INTO tweets (tweet, user_id) VALUES ('I am just a twig.', '3');
INSERT INTO tweets (tweet, user_id) VALUES ('Heh. I am a tweeting twat.', '4');
INSERT INTO tweets (tweet, user_id) VALUES ('I am Sir Tweet-a-Lot.', '4');
INSERT INTO tweets (tweet, user_id) VALUES ('I am Donald Tweet.', '5');
INSERT INTO tweets (tweet, user_id) VALUES ('I am Tweety Winty.', '5');
INSERT INTO tweets (tweet, user_id) VALUES ('I am Tweenos.', '1');
INSERT INTO tweets (tweet, user_id) VALUES ('OMG I am tweenty.', '2');

/* INSERT INTO HASHTAGS TABLE */
INSERT INTO hashtags (hashtag) VALUES ('#swag');
INSERT INTO hashtags (hashtag) VALUES ('#tired');
INSERT INTO hashtags (hashtag) VALUES ('#duckface');
INSERT INTO hashtags (hashtag) VALUES ('#ootd');
INSERT INTO hashtags (hashtag) VALUES ('#holy');
INSERT INTO hashtags (hashtag) VALUES ('#what');

/* INSERT INTO TWEET_HASHTAG TABLE */
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('1', '1');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('2', '1');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('3', '2');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('4', '2');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('5', '3');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('5', '3');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('6', '4');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('7', '4');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('8', '5');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('9', '5');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('10', '6');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('11', '6');
INSERT INTO tweet_hashtag (tweet_id, hashtag_id) VALUES ('12', '6');