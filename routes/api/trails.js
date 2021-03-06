var db = require("../../models");
var router = require('express').Router();
const passport = require("../../config/passport");
const LocalStrategy = require("passport-local").Strategy;

    router.post("/saved", (req, res) => {
        db.Trail.findAll({
          where: {
            username: req.body.username
          }
        }).then(function(dbTrail) {
         res.json(dbTrail)
        })
    })

    router.get("/:id", (req, res) => {
       db.Trail.findOne({
         where: {
            id: req.params.id
          }
       }).then(function(dbTrail) {
        res.json(dbTrail)
        })
    })

    router.post("/trails", (req, res) => {
        db.Trail.create(req.body).then(function(dbTrail) {
            res.json(dbTrail)
            console.log("success")
        })
    })

router.delete("/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Trail.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrail) {
      res.json(dbTrail);
    });
  });
  
  router.put("/:id", function(req, res) {
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


  router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("made it to the BACKEND!!!")
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.user);
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  });

  router.post("/signup", (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    console.log(req.body);
    console.log("signup request reached the backend")
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

module.exports = router