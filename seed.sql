-- /*=======
-- USERS
-- =========
-- */

-- INSERT INTO users (handle, display_name, dp_url, hashed_pw)
-- VALUES ('chelsejw', 'Chelsea Ee', 'url', 'hello');
-- INSERT INTO users
--       (handle, display_name, dp_url, hashed_pw)
-- VALUES
--       ('awongh', 'Akira Wong', 'url', 'cough');
-- INSERT INTO users
--       (handle, display_name, dp_url, hashed_pw)
-- VALUES
--       ('laustinspayce', 'Stuart Myers', 'url', 'tomnook');

-- /*=======
-- TWEETS
-- =========
-- */

-- INSERT INTO tweets (body, tweeted_by, img_url)
-- VALUES ('suuuuup my hoes', 1, null);
-- INSERT INTO tweets
--       (body, tweeted_by, img_url)
-- VALUES
--       ('Hello, I am Akira', 2, null);
--       INSERT INTO tweets
--       (body, tweeted_by, img_url)
-- VALUES
--       ('wow banana!', 2, null);
--       INSERT INTO tweets
--       (body, tweeted_by, img_url)
-- VALUES
--       ('COUGHSSSSS', 2, null);
-- INSERT INTO tweets
--       (body, tweeted_by, img_url)
-- VALUES
--       ('Hello, I am Stuart', 3, null);
--       INSERT INTO tweets
--       (body, tweeted_by, img_url)
-- VALUES
--       ('*DEEP BREATHS* ANIMAL!!!! CROSSING!!!', 3, null);


-- /*=======
-- TWEETS
-- =========
-- */

-- /*Leader: Chelsea
-- Followers: Stuart*/
-- INSERT INTO users_followers (leader_id, follower_id)
-- VALUES (1, 3);

-- /*Leader: Akira
-- Followers: Chelsea, Stuart*/
-- INSERT INTO users_followers
--       (leader_id, follower_id)
-- VALUES
--       (2, 1);
-- INSERT INTO users_followers
--       (leader_id, follower_id)
-- VALUES
--       (2, 3);

-- /*Leader: Stuart
-- Followers: Chelsea, Akira*/
-- INSERT INTO users_followers
--       (leader_id, follower_id)
-- VALUES
--       (3, 1);
--       INSERT INTO users_followers
--       (leader_id, follower_id)
-- VALUES
--       (3, 2);

INSERT INTO hashtags(hashtag_name) VALUES ('blessedt');
INSERT INTO hashtags
      (hashtag_name)
VALUES
      ('shookt');
INSERT INTO hashtags
      (hashtag_name)
VALUES
      ('cursedimage');
INSERT INTO hashtags
      (hashtag_name)
VALUES
      ('wtf');
