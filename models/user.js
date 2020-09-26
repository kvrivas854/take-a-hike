const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };

    User.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
          user.password,
          bcrypt.genSaltSync(10),
          null
        );
      });
      
    //   User.associate = function(models) {
    //     User.belongsToMany(models.Trail, { through: "FavoriteTrails"});
    // }
    
    return User;
  };