require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize =
process.env.NODE_ENV === "production"
? new Sequelize({
  database: DB_NAME,
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: {
    max: 3,
    min: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
})
: new Sequelize(
`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{ logging: false, native: false }
)

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/athenasclub`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Role, Product, Category, User, Activity, Cart, Review } = sequelize.models;


// RELACIONES:
Product.belongsToMany(Category, {through: 'Category_Product'});
Category.belongsToMany(Product, {through: 'Category_Product'});

Activity.belongsToMany(User, {through: 'Activity_User'});
User.belongsToMany(Activity, {through: 'Activity_User'});

User.belongsTo(Role);
Role.belongsToMany(User, {through: 'User_Role'});

Cart.belongsTo(User, { as: 'User', foreignKey : 'userId'});
User.hasMany(Cart, { as: 'User', foreignKey : 'userId'});

Cart.belongsToMany(Product, {through: 'Cart_Products'})
Product.belongsToMany(Cart, {through: 'Cart_Products'})

Cart.belongsTo(User); // una compra pertenece a un usuario
User.belongsToMany(Cart, {through: "Cart_User"}); // un usuario puede realizar muchas compras

Review.belongsTo(Activity);
Activity.belongsToMany(Review, {through: 'Activity_Review'});

Review.belongsTo(Product);
Product.belongsToMany(Review, {through: 'Product_Review'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
