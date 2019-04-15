DROP TABLE users;
DROP TABLE tweets;

INSERT INTO users (username, password) VALUES ('testuser', 'testpassword');
INSERT INTO users (username, password) VALUES ('testuser2', 'testpassword2');
INSERT INTO users (username, password) VALUES ('testuser3', 'testpassword3');


INSERT INTO tweets (tweet, username) VALUES ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'testuser');
INSERT INTO tweets (tweet, username) VALUES ('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'testuser');
INSERT INTO tweets (tweet, username) VALUES ('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'testuser2');
INSERT INTO tweets (tweet, username) VALUES ('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'testuser3');