SELECT *
FROM tweeds
WHERE users_id = '+userID+' ORDER by id DESC;



SELECT username, users.id, tweed, tweeds.id
FROM tweeds INNER JOIN users
ON (users.id = tweeds.users_id)
WHERE users_id = 1 ORDER by tweeds.id DESC;


SELECT username, users.id, followers.user_id
FROM followers INNER JOIN users
ON (users.id = followers.followers_user_id)
WHERE followers.user_id = 1;

INSERT INTO followers (user_id, followers_user_id) VALUES (1,10);