var db = require("../../models")
var router = require('express').Router()

// const booksController = require("../../controllers/booksController");


    router.get("/api/trails", (req, res) => {
        db.Trail.findAll({}).then(function(dbTrail) {
         res.json(dbTrail)
        })
    })

    router.get("/api/trails/:id", (req, res) => {
       db.Trail.findOne({
         where: {
            id: req.params.id
          }
       }).then(function(dbTrail) {
        res.json(dbTrail)
        })
    })

    router.post("/api/trails", (req, res) => {
        db.Trail.create(req.body).then(function(dbTrail) {
            res.json(dbTrail)
            console.log("success")
        })
    })

router.delete("/api/trails/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Trail.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrail) {
      res.json(dbTrail);
    });
  });

  router.put("/api/trails/:id", function(req, res) {
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

module.exports = router