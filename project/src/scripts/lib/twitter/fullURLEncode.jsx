module.exports = fullURLEncode;

function fullURLEncode ( stringToEncode ) {
    return encodeURIComponent( stringToEncode )
        .replace(/!/g,  '%21')
        .replace(/'/g,  '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}