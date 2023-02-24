## Tweedr Part 4 - AJAX

### Tweed Favorites

Add the ability for the user to favorite a tweed.

Favorites is a relationship table with 2 columns:

| id | user_id | tweed_id |
| -- |:-------:| --------:|
|  1 |    1    | 2        |
|  2 |    1    | 4        |
|  3 |    2    | 2        |
|  4 |    3    | 5        |

First create the ability for the user to add a tweet favorite without any extra features.

GET `/favorite/new` is a form that creates a request to create a new favorite. It just has 2 inputs where the user types in which ids they want.

POST `/favorite` is a route that accepts the form request. Creates a new favorite in the DB.

#### ajax

Replace the form with javascript that creates this request.

Everything is the same except:

When the user clicks a button, the javascript looks in the inputs of the form. An AJAX request is made to the express server with the values from the form inputs.

Hide the button after so the user can't click it twice.

#### further

GET `/favorites` users the `user_id` in the cookie to make a DB query for all the tweeds the logged in user has favorited.

#### further

Add the AJAX functionality to anywhere you display a tweed. The user can click a favorite button and the javascript will send the AJAX request.

#### further - more AJAX

When creating a tweed give the user the option to select from teh currect hashtags.

When the page loads make an AJAX request for all hashtags.

Add a listener to the tweed form so that when the user types the `#` hashtag symbol a dropdown is displayed on the page. When the user selects from the dropdown, the hashtag is put into the form.

#### further

Add the same ability for @ mentions in a tweed using AJAX.



