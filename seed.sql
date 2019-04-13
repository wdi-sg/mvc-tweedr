
/*
 *     INSERT TO USERS
 */


INSERT INTO users (name, password, pic) VALUES ('John Doe', 'password', 'photo' );
INSERT INTO users (name, password, pic) VALUES ('John Doe', 'password', 'photo' );


/*
 *     INSERT TO TWEETS
 */


INSERT INTO tweets (message, pic, user_id) VALUES ('yo imma chill', 'selfie.jpeg', 'user_id' );
INSERT INTO tweets (message, pic, user_id) VALUES ('yo imma chill', 'selfie.jpeg', 'user_id' );


/*
 *     INSERT TO FOLLOWERS
 */


INSERT INTO users (user_id, followers_user_id) VALUES ('1', '2');
INSERT INTO users (user_id, followers_user_id) VALUES ('2', '1');
