module.exports = function(sequelize, DataTypes) {
    var Trail = sequelize.define("Trail", {
      userID: DataTypes.INTEGER,
      trailID: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      Summary: DataTypes.STRING,
      Stars: DataTypes.DECIMAL,
      Location: DataTypes.STRING,
      Ascent: DataTypes.INTEGER,
      Length: DataTypes.DECIMAL,
      ConditionStatus: DataTypes.STRING,
    

    
      saved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    //   Trail.associate = function(models) {
    //     Trail.belongsTo(models.User, { through: "FavoriteTrails"});
    // }

    return Trail;
  };
  
