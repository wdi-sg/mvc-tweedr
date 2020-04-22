create table "user"
(
	id serial not null
		constraint user_pk
			primary key,
	user_name text not null,
	password text not null,
	salt text not null,
	profile_pic_url text
);

create unique index user_user_name_uindex
	on "user" (user_name);

create table tweet
(
	id serial not null
		constraint tweet_pk
			primary key,
	title text not null,
	content text,
	user_id int
		constraint tweet_user_id_fk
			references "user" (id)
				on update cascade on delete cascade,
	likes int default 0
);

