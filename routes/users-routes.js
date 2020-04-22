const Router = require('express-promise-router');
const db = require('..db/js');

const express = require('express');
const path = require('path');

const router = new Router();

const usersController = require('./controllers/pokemon')(allModels);

module.exports = router;