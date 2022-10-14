require("dotenv").config();
const { default: axios } = require("axios");
const { Router } = require("express");
const { Op, Association } = require("sequelize");
const { Product } = require('../db');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.delete('/products/delete:id', async (req, res, next)=>{
    const { id } = req.params;
    try {
      await  Product.destroy({
        where:{
            id:id,
        }
      })
      res.status(200).send('Producto eliminado')
    } catch (error) {
        res.status(400).send('error')
    }
    
})


module.exports = router;
