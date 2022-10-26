// const { DataTypes } = require("sequelize");
// module.exports = (sequelize) => {
//     sequelize.define(
//         "cart",
//         {
//             id_product: {
//                 type: DataTypes.INTEGER,
//                 unique: true,
//                 allowNull: false,
//             },
//             subtotal: {
//                 type: DataTypes.BIGINT,
//                 allowNull: false,
//             },
//             id_purchase: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,
//                 allowNull: false,
//                 primaryKey: true,
//             }
//         },
//         {
//             timestamps: false,
//         }
//     );
// };

const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define(
        "cart",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            products: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: false,
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: false,
                
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    );
};