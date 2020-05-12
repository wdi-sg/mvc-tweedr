CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    password TEXT
);
    



CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
     message TEXT,
     photo_url TEXT
);
     
