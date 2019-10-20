INSERT INTO users (name, password) VALUES ('test', '123');
INSERT INTO users (name, password) VALUES ('minion', 'banana');

INSERT INTO tweeds (tweed, user_id) VALUES ('Hello TWEEDR!!! :)', 1);
INSERT INTO tweeds (tweed, user_id) VALUES ('BANANA!!!', 2);

INSERT INTO followers (user_id, follower_user_id) VALUES (1,2);