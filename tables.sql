CREATE TABLE IF NOT EXISTS users (
    id	SERIAL PRIMARY KEY ,
	name TEXT,
	password TEXT,
	email TEXT
	
);

CREATE TABLE IF NOT EXISTS tweets (
    
	id	SERIAL PRIMARY KEY,
	content TEXT,
	user_id INTEGER
	
);

    
	