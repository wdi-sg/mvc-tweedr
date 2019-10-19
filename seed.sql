INSERT INTO users (name, password) VALUES ('test', '123');
INSERT INTO users (name, password) VALUES ('minion', 'banana');

INSERT INTO tweeds (tweed) VALUES ('Hello TWEEDR!!! :)');
INSERT INTO tweeds (tweed) VALUES ('BANANA!!!');

INSERT INTO user_tweed (tweed_id, user_id) VALUES (1,1);
INSERT INTO user_tweed (tweed_id, user_id) VALUES (2,2);

INSERT INTO followers (user_id, follower_user_id) VALUES (1,2);