create table if not exists users (
  id serial primary key,
  username text, 
  pw text,
  dp text
);

create table if not exists tweets (
  id serial primary key,
  content text, 
  timestamp bigint,
  user_id integer
);

create table if not exists followers (
 id serial primary key,
 user_id integer,
 follower_id integer
);

create table if not exists hashtags (
 id serial primary key,
 tag text
);

create table if not exists tweet_hashtag (
 id serial primary key,
 tweet_id integer,
 ht_id integer
);