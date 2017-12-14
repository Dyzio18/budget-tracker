const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleCredentials = require('../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: googleCredentials.googleClientID,
        clientSecret: googleCredentials.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(`Access token: ${accessToken}`);
        console.log(profile);

    })
);