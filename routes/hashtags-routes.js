const Router = require('express-promise-router');
const db = require('../db.js');

const express = require('express');
const path = require('path');

const router = new Router();

const hashtagsController = require('../controllers/hashtags-controller.js');


router.use('/', express.static(path.join(__dirname, '..', '/public/')));
router.use('/:route', express.static(path.join(__dirname, '..', '/public/')));

// router.use('/', (req, res, next) => {

//     if (!req.session.userId) {
//         req.session.invalidMsg = "Please login to see hashtags";
//         res.redirect('/auth/login');
//     } else {
//         next();
//     }
// })

router.get('/new', hashtagsController.getAddHashtagForm);

router.get('/:id/edit', hashtagsController.getEditHashtagForm);

router.get('/:id', hashtagsController.getHashtag);

router.get('/', hashtagsController.getAllHashtags);

router.post('/', hashtagsController.postAddHashtag);

router.put('/:id', hashtagsController.putEditHashtag);

router.get('/:id/delete', hashtagsController.deleteHashtag);

module.exports = router;