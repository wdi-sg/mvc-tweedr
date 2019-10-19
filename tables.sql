CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    description TEXT,
    user_img TEXT,
    creation_date DATE,
    user_state TEXT
);

CREATE TABLE IF NOT EXISTS tweets (
    id SERIAL PRIMARY KEY,
    user_id INTEGER
    tweet TEXT,
    creation_date DATE,
);

CREATE TABLE IF NOT EXISTS following (
    id SERIAL PRIMARY KEY,
    user_id_alpha INTEGER,
    user_id_beta INTEGER,
    creation_date DATE
);