const express = require("express");
const session = require("express-session");
var db = require("./models");
const routes = require("./routes");
const app = express();
const passport = require("./config/passport");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("take-a-hike/src"));
// }
// Add routes, both API and view

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
// require("./routes/api/index.js")(app);

// Start the API server
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
