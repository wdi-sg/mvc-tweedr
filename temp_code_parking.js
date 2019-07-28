
/*****************login form**********************/
<div class="uk-card uk-card-default">
<form class="uk-form-horizontal">
<div className="uk-margin">
    <label class="uk-form-label" for="form-horizontal-text">Login Id</label>
    <div className="uk-inline">
    <span className="uk-form-icon" uk-icon="icon: user"></span>
    <input className="uk-input" type="text"/>
    </div>
</div>

<div className="uk-margin">
    <label class="uk-form-label" for="form-horizontal-text">Password</label>
    <div className="uk-inline">
    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: sign-in"></span>
    <input className="uk-input" type="text"/>
    </div>
</div>

</form>
</div>

/*****************login form**********************/
<nav className="navbar navbar-light p-3 mb-2 bg-dark text-white">
    <a className="navbar-brand" href="/">
        <img src="/images/logo_200x200.png" width="100" height="100" alt=""/>
    </a>

</nav>

/*****************query followers form**********************/

SELECT users.id, users.screen_name, users.avatar, tweets.tweetmsg FROM users INNER JOIN tweets ON (tweets.userid = users.id)
INNER JOIN following ON (following.userid = users.id, following.followingid = users.id)
ORDER BY tweets.timestamp_col ASC;

SELECT users.id, users.screen_name, tweets.tweetmsg FROM users INNER JOIN tweets ON (tweets.userid = users.id)
INNER JOIN following ON (following.followingid = users.id)
WHERE users.id=1
ORDER BY tweets.timestamp_col ASC;

following works here
SELECT following.userid, following.followingid, tweets.tweetmsg FROM following
INNER JOIN users ON (following.followingid = users.id)
INNER JOIN tweets ON (tweets.userid = users.id)
WHERE following.userid=4
ORDER BY tweets.timestamp_col ASC;

query followers message
SELECT following.followingid, following.userid, tweets.tweetmsg FROM following
INNER JOIN users ON (following.followingid = users.id)
INNER JOIN tweets ON (tweets.userid = users.id)
WHERE following.followingid=4
ORDER BY tweets.timestamp_col ASC;




SELECT users.id, users.screen_name, tweets.tweetmsg FROM users
INNER JOIN tweets ON (tweets.userid = users.id)
WHERE users.id=1
UNION
SELECT following.followingid, users.screen_name, tweets.tweetmsg FROM following
INNER JOIN users ON (following.followingid = users.id)
INNER JOIN tweets ON (tweets.userid = users.id)
WHERE following.userid=1;


CREATE OR REPLACE VIEW listTweets
AS SELECT users.id, users.screen_name, users.avatar, tweets.tweetmsg, tweets.timestamp_col FROM users
INNER JOIN tweets ON (tweets.userid = users.id)
WHERE users.id=1
UNION
SELECT following.followingid, users.screen_name, users.avatar, tweets.tweetmsg, tweets.timestamp_col FROM following
INNER JOIN users ON (following.followingid = users.id)
INNER JOIN tweets ON (tweets.userid = users.id)
WHERE following.userid=1;
SELECT * FROM listTweets ORDER BY timestamp_col;
