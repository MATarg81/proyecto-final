const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productQty: {
      type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.INTEGER)),
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
