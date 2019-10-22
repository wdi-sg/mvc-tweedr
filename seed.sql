-- Users
INSERT INTO users (username, hashPassword) VALUES ('Mark','Fb123');
INSERT INTO users (username, hashPassword) VALUES ('Jack','Tw123');
INSERT INTO users (username, hashPassword) VALUES ('PDP','Yt123');
INSERT INTO users (username, hashPassword) VALUES ('Eden','password');

-- Tweeds
INSERT INTO tweeds (user_id, content) VALUES (1,'My first tweed');
INSERT INTO tweeds (user_id, content) VALUES (1,'Lol, lame Social Media');
INSERT INTO tweeds (user_id, content) VALUES (1,'Fb gonna buy your sorry ass');
INSERT INTO tweeds (user_id, content) VALUES (2,'Dude, tweedr?');
INSERT INTO tweeds (user_id, content) VALUES (2,'You are gonna hear from my lawyer');
INSERT INTO tweeds (user_id, content) VALUES (2,'See ya in court, loser');
INSERT INTO tweeds (user_id, content) VALUES (3,'Gonna cover your web on my channel');
INSERT INTO tweeds (user_id, content) VALUES (3,'Share it with my Bro army');
INSERT INTO tweeds (user_id, content) VALUES (3,'Bro fist yall!');
INSERT INTO tweeds (user_id, content) VALUES (4,'Hello World');
INSERT INTO tweeds (user_id, content) VALUES (4,'Console.log');
INSERT INTO tweeds (user_id, content) VALUES (4,'Banana');

-- Relationship
INSERT INTO following (user_id, following_id) VALUES (1,2);
INSERT INTO following (user_id, following_id) VALUES (1,3);
INSERT INTO following (user_id, following_id) VALUES (2,1);
INSERT INTO following (user_id, following_id) VALUES (2,3);
INSERT INTO following (user_id, following_id) VALUES (3,1);
INSERT INTO following (user_id, following_id) VALUES (3,2);