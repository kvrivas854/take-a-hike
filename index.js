const express = require("express");
const session = require("express-session");
var db = require("./models");
const routes = require("./routes");
const app = express();
const passport = require("./config/passport");
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;
var mysql = require('mysql');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("take-a-hike/src"));
// }

// Add routes, both API and view

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'BentleyBear8!',
        database: 'takeahikedb'
    })
};

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}
// require("./routes/api/index.js")(app);

// Start the API server {force: true}
db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
