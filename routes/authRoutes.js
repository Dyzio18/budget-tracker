/**
 * Authentication Route
 */
const passport = require('passport');
const cookieSession = require("cookie-session");

module.exports = app => {
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/habits');
        }
    );

    app.get('/api/logout', 
        (req, res) => {
            //req.logout(); 
            req.logOut();
            res.redirect('/');  
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};

