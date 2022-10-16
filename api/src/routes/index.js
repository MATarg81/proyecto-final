const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require ('./products');
const users = require ('./users')
const roles = require ('./roles')
const category = require ('./category')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', products);
router.use('/users', users);
router.use('/roles', roles)
router.use('/categories', category)



module.exports = router;