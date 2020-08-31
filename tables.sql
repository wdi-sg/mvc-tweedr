CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username text,
    pw text
);

CREATE TABLE IF NOT EXISTS tweets (
    id serial PRIMARY KEY,
    tweets text,
    user_id integer
)

-- CREATE TABLE IF NOT EXISTS followers (
--     id serial PRIMARY KEY,

-- )