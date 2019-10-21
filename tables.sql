CREATE TABLE IF NOT EXISTS sender (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
);

CREATE TABLE IF NOT EXISTS recipient (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER,
    recipient_id INTEGER,
    amount INTEGER
);
