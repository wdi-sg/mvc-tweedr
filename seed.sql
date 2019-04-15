
/*
 *     INSERT TO USERS
 */


INSERT INTO users (name, password, pic) VALUES ('John Doe', 'password', 'photo' );
INSERT INTO users (name, password, pic) VALUES ('John Doe', 'password', 'photo' );


/*
 *     INSERT TO TWEETS
 */


INSERT INTO tweets (message, photo_attached, user_id) VALUES ('yo imma chill', 'selfie.jpeg', '1' );
INSERT INTO tweets (message, photo_attached, user_id) VALUES ('yo imma chill', 'selfie.jpeg', '2' );


/*
 *     INSERT TO FOLLOWERS
 */


INSERT INTO followers (user_id, followers_user_id) VALUES ('1', '2');
INSERT INTO followers (user_id, followers_user_id) VALUES ('2', '1');
