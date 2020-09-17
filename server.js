const express = require("express");
var db = require("./models");
const mysql = require("mysql");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("take-a-hike/src"));
}
// Add routes, both API and view
app.use(routes);

require("./routes/post-api-routes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Start the API server
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
