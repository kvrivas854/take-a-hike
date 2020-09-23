module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userID: DataTypes.INTEGER,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });
    return User;
  };