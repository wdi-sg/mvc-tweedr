CREATE TABLE IF NOT EXISTS userdb (
	id SERIAL PRIMARY KEY,
	userhandle TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS tweetsdb (
	id SERIAL PRIMARY KEY,
	userid INTEGER,
	userhandle TEXT,
	tweets TEXT
);