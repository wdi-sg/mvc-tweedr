CREATE TABLE IF NOT EXISTS hashtags_tweets (
	id serial PRIMARY KEY,
	hashtag_id INTEGER REFERENCES hashtags(id) ON DELETE CASCADE,
	tweet_id INTEGER REFERENCES tweets(id) ON DELETE CASCADE
);