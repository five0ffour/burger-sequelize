module.exports = function(sequelize, DataTypes) {
    return sequelize.define("burger", {
      burger_name: {
        type: DataTypes.STRING
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue : false
      },
    });
  };
  