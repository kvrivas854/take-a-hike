module.exports = function(sequelize, DataTypes) {
    var Trail = sequelize.define("Trail", {
      trailID: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      Summary: DataTypes.STRING,
      Stars: DataTypes.DECIMAL,
      Location: DataTypes.STRING,
      Ascent: DataTypes.INTEGER,
      Length: DataTypes.DECIMAL,
      ConditionStatus: DataTypes.STRING
    });
    return Trail;
  };
  
