## tweedr part 3

### hashtags

We will implement a version of hashtags in the original twitter.

Hashtags will be a mnay to many relationship.

One tweed can have many hashtags. Hashtags has many tweeds.

But: to create a tweed with a hashtag, things will work a little differently. The hashtag will not be in the tweet itself.

To use a hashtag it must already be created in the system.

Create the ability to add new hashtags to the system:
  - create a form for a new hashtag
  - create an `app.post` for the new hashtag
  - show all hashtags

To create a tweed with a hashtag, show the current hashtags you can select from.

#### further

Create links on the tweed page for each hashtag.

Create a page to list all tweeds with a given hashtag.

#### further

Add the full UI for this many to many relationship.

When applying a hastag to a tweed, use a checkbox for each tweed.

#### further

Add the ability to add hashtags when the tweed is created.

#### further

Change the app to behave like twitter. When the text of a tweed contains the hashtag symbol, add a record in the db to associate that tweed with the hashtag. 

If the hashtag doesn't exist, create it.

