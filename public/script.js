const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const SALT = 'winter'; // cannot change

module.exports = () =>{
/**
 * ===================================
 * ===================================
 * Helper functions
 * ===================================
 * ===================================
 */

    let hashString = (string)=>{
        const unHashed = string;
        console.log('INSIDE SCRIPT');
        console.log(unHashed);
    };


    let cookieChecker = (req,res)=>{
    console.log(req.cookies);
    }

    return {
        checker: cookieChecker,
        hash: hashString,
    };
}