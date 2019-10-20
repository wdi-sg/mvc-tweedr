SELECT *
FROM tweeds
WHERE users_id = '+userID+' ORDER by id DESC;


-- getting tweeds from user and people user is following
SELECT username, users.id, tweed, tweeds.id
FROM tweeds INNER JOIN users
ON (users.id = tweeds.users_id)
INNER JOIN followers
ON (followers.followers_user_id = tweeds.users_id)
WHERE followers.user_id = 1 OR users_id = 1 ORDER by tweeds.id DESC;
-- FAILLLLLLLLLLL


-- getting tweeds
SELECT username, users.id, tweed, tweeds.id
FROM tweeds INNER JOIN users
ON (users.id = tweeds.users_id)
WHERE users.id = 2 ORDER by tweeds.id DESC;



-- showing people that user is following
SELECT username, users.id, followers.user_id
FROM followers INNER JOIN users
ON (users.id = followers.followers_user_id)
WHERE followers.user_id = 1;



-- following people only if haven't follow yet
insert into followers (user_id, followers_user_id)
 Select 1, 10 Where not exists(select * from followers where user_id=1 and followers_user_id=10);



-- update profile pic
UPDATE users SET image = ($1) WHERE users.id = ($2);