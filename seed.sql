INSERT INTO users(username, password, img_url, created_at) VALUES ('demo', '5982616cb6d9b51226d04a28952801d1bab0b24fefa95e75dd6c0b5a80dd9e3d','http://pngimg.com/uploads/pokemon/pokemon_PNG154.png', '14/4/2019 01:20:00');
INSERT INTO users(username, password, img_url, created_at) VALUES ('godzilla', 'd4c56bdf715d3c773d2e8bbac475d14b24dadbf9d83a396142900cfd95c1090e','https://images-na.ssl-images-amazon.com/images/I/51Gji7jFNjL._SX425_.jpg', '14/4/2019 01:20:10');

INSERT INTO tweets(users_username, content, created_at) VALUES ('demo', 'Hello World!', '14/4/2019 08:20:00');
INSERT INTO tweets(users_username, content, created_at) VALUES ('demo', 'I am the King!', '14/4/2019 08:20:10');
INSERT INTO tweets(users_username, content,created_at) VALUES ('demo', 'I am the Joker!', '14/4/2019 08:20:20');
INSERT INTO tweets(users_username, content,created_at) VALUES ('godzilla', 'RAWRRR!!!!!', '14/4/2019 08:10:20');