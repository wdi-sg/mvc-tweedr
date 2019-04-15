DROP TABLE users;
DROP TABLE tweets;
DROP TABLE followers;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT    
); 

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_id INTEGER
);

CREATE TABLE IF NOT EXISTS followers (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    follower_id INTEGER    
);


INSERT INTO users (username, password) VALUES ('donald tramp','b2d64c99693d4155d827dfac7fc8e3ae593f824f16a8de1aca249223cc9f2141');
INSERT INTO users (username, password) VALUES ('kim jong urn','c200e493e42921d44f33331262fb43b8a99c0ad40492b1b7cc137f91205ebcd2');
INSERT INTO users (username, password) VALUES ('Xi Ginpink','prc');
INSERT INTO users (username, password) VALUES ('Theresa Mehhh','uk');
INSERT INTO users (username, password) VALUES ('Justin Trutat','cnd');
INSERT INTO users (username, password) VALUES ('Shinzo Abs','jpn');

INSERT INTO tweets (content, user_id) VALUES ('It''s freezing and snowing in New York. We need global warming',1);
INSERT INTO tweets (content, user_id) VALUES ('Who cares about building relationships when you can build walls',1);
INSERT INTO tweets (content, user_id) VALUES ('I''ve never seen a thin person drinking diet coke',1);
INSERT INTO tweets (content, user_id) VALUES ('I am sending you a missile with love',2);
INSERT INTO tweets (content, user_id) VALUES ('Why is the South China Sea named as such? Cuz it belongs to China, duh~',3);
INSERT INTO tweets (content, user_id) VALUES ('Going back and forth between the UK and EU drives me crazzzzeh. Someone get me a glass of whisky!',4);

INSERT INTO followers (user_id, follower_id) VALUES (1,2);
INSERT INTO followers (user_id, follower_id) VALUES (1,5);
INSERT INTO followers (user_id, follower_id) VALUES (1,6);
INSERT INTO followers (user_id, follower_id) VALUES (2,1);
INSERT INTO followers (user_id, follower_id) VALUES (2,3);
INSERT INTO followers (user_id, follower_id) VALUES (3,1);
INSERT INTO followers (user_id, follower_id) VALUES (3,2);
INSERT INTO followers (user_id, follower_id) VALUES (3,4);
INSERT INTO followers (user_id, follower_id) VALUES (4,1);
INSERT INTO followers (user_id, follower_id) VALUES (4,3);
INSERT INTO followers (user_id, follower_id) VALUES (4,5);
INSERT INTO followers (user_id, follower_id) VALUES (4,6);
INSERT INTO followers (user_id, follower_id) VALUES (5,1);
INSERT INTO followers (user_id, follower_id) VALUES (5,4);
INSERT INTO followers (user_id, follower_id) VALUES (5,6);
INSERT INTO followers (user_id, follower_id) VALUES (6,1);
INSERT INTO followers (user_id, follower_id) VALUES (6,4);
INSERT INTO followers (user_id, follower_id) VALUES (6,5);