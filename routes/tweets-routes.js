const Router = require('express-promise-router');
const db = require('../db.js');

const express = require('express');
const path = require('path');

const router = new Router();

const tweetsController = require('../controllers/tweets-controller.js');


router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:route', express.static(path.join(__dirname, '..', '/public/')));

router.use('/', (req, res, next) => {

    if (!req.session.userId) {
        req.session.invalidMsg = "Please login to see tweets";
        res.redirect('/auth/login');
    } else {
        next();
    }
})

router.get('/new', tweetsController.getAddTweetForm);

router.get('/:id/edit', tweetsController.getEditTweetForm);

router.get('/:id', tweetsController.getTweet);

router.get('/', tweetsController.getAllTweets);

router.post('/', tweetsController.postAddTweet);

router.put('/:id', tweetsController.putEditTweet);

router.get('/:id/delete', tweetsController.deleteTweet);

module.exports = router;