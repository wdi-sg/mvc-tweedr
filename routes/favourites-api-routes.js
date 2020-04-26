const Router = require('express-promise-router');

const express = require('express');
const path = require('path');

const router = new Router();

const favouritesApiController = require('../controllers/favourites-api-controller');


router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:route', express.static(path.join(__dirname, '..', '/public/')));

router.post('/:tweetId', favouritesApiController.postAddTweetToUserFavourites);

router.delete('/:tweetId', favouritesApiController.deleteTweetFromUserFavourites);

module.exports = router;