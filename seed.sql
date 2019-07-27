INSERT INTO users (name, password) VALUES ('jon', 'joy');

INSERT INTO users (name, password) VALUES ('joy', 'jon');

INSERT INTO tweets (content, userid) VALUES ('COME OVER?', 1);

INSERT INTO tweets (content, userid) VALUES ('OKAY!', 2);

INSERT INTO follows (user_id, follower_id) VALUES (1, 2);

INSERT INTO follows (user_id, follower_id) VALUES (2, 1);