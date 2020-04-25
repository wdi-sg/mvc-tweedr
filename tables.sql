create table if not exists users (
    id serial PRIMARY key,
    name text,
    password text
);

create table if not exists tweets (
    id serial primary key,
    content text,
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

