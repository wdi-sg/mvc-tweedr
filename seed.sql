-- some users
INSERT INTO users (name, email, password) VALUES ('Bear', 'bear@email.com', 'grr123');
INSERT INTO users (name, email, password) VALUES ('Meow', 'meow@email.com', 'maumau');
INSERT INTO users (name, email, password) VALUES ('Birdo', 'birdo@email.com', 'tweet');

-- some tweets
INSERT INTO tweets (post, user_id) VALUES ('So hungry!', 1);
INSERT INTO tweets (post, user_id) VALUES ('Prrrrrrrr...', 2);
INSERT INTO tweets (post, user_id) VALUES ('Flying high!!', 3);