const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userID: DataTypes.INTEGER,
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    User.prototype.validPassword = function(password) {
        //return bcrypt.compareSync(password, this.password);
        return password === this.password;
      };

    User.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
          user.password,
          bcrypt.genSaltSync(10),
          null
        );
      });
    
    return User;
  };