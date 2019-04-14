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


INSERT INTO users (username, password) VALUES ('donald tramp','republican');
INSERT INTO users (username, password) VALUES ('kim jong urn','communist');

INSERT INTO tweets (content, user_id) VALUES ('I am the most powerful person in the world. I can do whatever I want',1);
INSERT INTO tweets (content, user_id) VALUES ('Who cares about building the country when you can build walls',1);
INSERT INTO tweets (content, user_id) VALUES ('I am sending you a missile with love',2);