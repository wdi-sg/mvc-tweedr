psql -d tweedr -U wilfredloh -f sql-drop.sql
psql -d tweedr -U wilfredloh -f sql-tables.sql
psql -d tweedr -U wilfredloh -f sql-users.sql
psql -d tweedr -U wilfredloh -f sql-tweets.sql
psql -d tweedr -U wilfredloh -f sql-followers.sql


1. tables if not exists

PRIMARY TABLES
	- users
		- id (PK)
		- name
		- password
		- interests
	- tweets
		- id (PK)
		- user_id (Foreign key)
		- detail

SECONDARY TABLES
	- followers (being followed) 
		- id (PK)
		- user_id (FK)
		- follower_id (FK)
<!-- 	- follow (am following)
		- id (PK)
		- user_id (FK)
		- follow_id (FK) -->


2. pages

BEFORE LOGIN
	- login page 
		- only show latest 3 tweets
		- register (redirect button)
		- login name & password (input fields) + submit ***
	- register page ***

AFTER LOGIN
	- home page (after login - show only tweets from ppl u follow) ***
	- trending page (show all tweets - limit to 20)
	- new tweet (back to homepage) ***
	- your profile page
		- to edit or view own profile
		- view current followers
	- see other people's pages 
		- other profile pages & their followers
		- follow other people
		- see their tweets

3. cookies - authentication on each page

CSS
	- add favicon

OTHER
-	button to add multiple dropdown?
-	add main page
-	returning ---> ?
-	top level render --> each child should have a unique 'key' prop
-	shortcut to delete one word