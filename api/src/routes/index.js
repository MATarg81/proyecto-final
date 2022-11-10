const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products");
const users = require("./users");
const roles = require("./roles");
const category = require("./category");
const activities = require("./activities");
const reviews = require("./reviews");
const cart = require("./cart");
const { payment } = require("./payment");
const favs = require("./favs")
const registerActivity = require("./registerActivity");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", products);
router.use("/users", users);
router.use("/roles", roles);
router.use("/categories", category);
router.use("/activities", activities);
router.use("/reviews", reviews);
router.use("/cart", cart);
router.use("/payment/", payment);
router.use("/favorites", favs);
router.use("/profile/actividades", registerActivity);

module.exports = router;
