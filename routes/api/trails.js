var db = require("../../models")
// const booksController = require("../../controllers/booksController");

module.exports = function(app) {
    app.get("/api/trails", (req, res) => {
        db.Trail.findAll({}).then(function(dbTrail) {
         res.json(dbTrail)
        })
    })

app.get("/api/trails/:id", (req, res) => {
    db.Trail.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(dbTrail) {
        res.json(dbTrail)
    })
})

app.post("/api/trails", (req, res) => {
    db.Trail.create(req.body).then(function(dbTrail) {
        res.json(dbTrail)
    })
})

app.delete("/api/trails/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Trail.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrail) {
      res.json(dbTrail);
    });
  });

  app.put("/api/trails/:id", function(req, res) {
    db.Trail.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

}