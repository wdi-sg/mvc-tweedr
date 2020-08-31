CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    users name,
)

CREATE TABLE IF NOT EXISTS tweets (
    id serial PRIMARY KEY,
    tweets text,
    user_id integer
)

-- CREATE TABLE IF NOT EXISTS followers (
--     id serial PRIMARY KEY,

-- )