const sha256 = require('js-sha256');

let addZero = function(n) {
    if (n < 10) {
        n = "0" + n;
    }

    return n;
}

module.exports.getCurrentDateAndTime = function() {
    let date = new Date();

    return `${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() } ` +
           `${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }:${ addZero(date.getSeconds()) }`;
}

module.exports.checkCookiesForLogin = function (cookies) {
    if (Object.entries(cookies).length === 0) {
        return false;
    }

    if(cookies['loggedIn'] === sha256(cookies['username'])) {
        return true;
    } else {
        return false;
    }
}