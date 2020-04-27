const Router = require('express-promise-router');

const express = require('express');
const path = require('path');

const router = new Router();

const hashtagsTweetsApiController = require('../controllers/hashtags-tweets-api-controller');


router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:route', express.static(path.join(__dirname, '..', '/public/')));

router.get('/:tweetId', hashtagsTweetsApiController.getAllHashtagsOfTweet);

router.post('/:tweetId/:hashtagId', hashtagsTweetsApiController.postAddHashtagToTweet);

router.delete('/:tweetId/:hashtagId/delete', hashtagsTweetsApiController.deleteHashtagOfTweet);

router.get('/', hashtagsTweetsApiController.getAllHashtags);

module.exports = router;