const config = require("./config/keys");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

require("./models/User"); /* Must loaded before passport */
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
require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

/* Dynamic port binding */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listen on port: " + PORT);
});
