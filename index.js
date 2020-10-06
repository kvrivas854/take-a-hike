const express = require("express");
const session = require("express-session");
var db = require("./models");
const routes = require("./routes");
const app = express();
const passport = require("./config/passport");
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("take-a-hike/src"));
// }

// Add routes, both API and view
if (process.env.NODE_ENV === "production"){
  app.use(express.static("build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
} 

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
// require("./routes/api/index.js")(app);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    user: 'root',
    password: 'BentleyBear8!',
    database: 'takeahikedb'
  });
};
// Start the API server {force: true}
db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
