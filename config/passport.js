const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
    new LocalStrategy(
      // Our user will sign in using a "username"
      {
        usernameField: "username"
      },
      (username, password, done) => {
        // When a user tries to sign in this code runs
        db.User.findOne({
          where: {
            username: username
          }
        }).then(dbUser => {
          console.log(dbUser);
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect username."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (!dbUser.validPassword(password)) {
            console.log("incorrect password");
            return done(null, false, {
              message: "Incorrect password."
            });
          }
          console.log("correct username+password");
          // If none of the above, return the user
          return done(null, dbUser);
        });
      }
    )
  );

passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
  
  // Exporting our configured passport
  module.exports = passport;