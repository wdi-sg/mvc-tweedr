CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      handle VARCHAR(15),
      display_name VARCHAR(25),
      dp_url varchar(65535),
      hashed_pw TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tweets
(
      tweet_id SERIAL PRIMARY KEY,
      body VARCHAR (140),
      tweeted_by INTEGER,
      img_url varchar (65535),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      FOREIGN KEY (tweeted_by) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS users_followers
(
      uf_id SERIAL PRIMARY KEY,
      leader_id INTEGER,
      follower_id INTEGER,
      followed_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      FOREIGN KEY (leader_id) REFERENCES users(user_id),
      FOREIGN KEY (follower_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS hashtags 
(
      hashtag_id SERIAL PRIMARY KEY,
      hashtag_name TEXT
);

CREATE TABLE IF NOT EXISTS hashtags_tweets 
( 
      id SERIAL PRIMARY KEY,
      hashtag_id INTEGER,
      tweet_id INTEGER,
      FOREIGN KEY (hashtag_id) REFERENCES hashtags(hashtag_id),
      FOREIGN KEY (tweet_id) REFERENCES tweets(tweet_id)
);

