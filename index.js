const config = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

/* Models */
require("./models/User"); /* Must loaded before passport */
require("./models/Habit"); 

require("./services/passport");

/* Connect with database */
mongoose.connect(config.mongoURI);

/* Set cookies */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

/* Set routes */
require('./routes/authRoutes')(app);
require('./routes/habitRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

/* Dynamic port binding */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listen on port: " + PORT);
});
