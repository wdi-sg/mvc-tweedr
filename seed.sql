INSERT INTO users (name, email, username, password) VALUES ('Donny', 'donny@gmail.com', 'madmen', 'testpassword');

INSERT INTO tweet (users_userid, users_username, content) VALUES (1, 'madmen', 'My first tweet!!');


INSERT INTO payment (sender_id, recipient_id, amount) VALUES (1,2,250);
INSERT INTO payment (sender_id, recipient_id, amount) VALUES (2,3,50);
INSERT INTO payment (sender_id, recipient_id, amount) VALUES (2,1,100);