let addZero = function(n) {
    if (n < 10) {
        n = "0" + n;
    }
        return n;
}

module.exports.getCurrentDateAndTime = function() {
    let date = new Date();

    return `${ date.getMonth() + 1 }/${ date.getDate() }/${ date.getFullYear() }
        ${ addZero(date.getHours()) }:${ addZero(date.getMinutes()) }:${ addZero(date.getSeconds()) }`;
}