const sha256 = require('js-sha256');
const SALT = 'meow meow poop';

let register = (request, response) => {
        response.render('pages/register.jsx');
    };