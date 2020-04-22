const Router = require('express-promise-router');
const db = require('../db.js');

const express = require('express');
const path = require('path');

const router = new Router();

const tweetsController = require('../controllers/tweets-controller.js');

router.use('/:route', express.static(path.join(__dirname, '..', '/public/')));

router.get('/:id', tweetsController.getTweet);

router.get('/', tweetsController.getAllTweets);

router.post('/', tweetsController.postAddTweet);

router.delete('/:id', tweetsController.deleteTweet);

module.exports = router;