const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "cart",
        {
            id_product: {
                type: DataTypes.INTEGER,
                unique: true,
                allowNull: false,
            },
            subtotal: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            id_purchase: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            }
        },
        {
            timestamps: false,
        }
    );
};