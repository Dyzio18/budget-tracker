/* CREDENTIAL KEYS TO GOOGLE API and OTHERS... */

if(process.env.NODE_ENV === 'production'){
    // prod
    module.exports = require('./keys-prod');
} else {
    // dev
    module.exports = require('./keys-dev');
}

