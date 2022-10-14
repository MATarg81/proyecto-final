require("dotenv").config();
// const { default: axios } = require("axios");
const { Router } = require("express");
const {allProducts, productsId} = require('./utils/products');
const {Product} = require ('../db');
// const { Op, Association } = require("sequelize");


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.delete('/products/:id', async (req, res, next)=>{
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


router.get("/", async(req, res) => {
 
    try {
        const qname = req.query.name;
        const totalProducts = await allProducts();
        ;
        if(qname) {
            const productsWithName = totalProducts.filter((r) => r.name.toLowerCase().includes(qname.toLowerCase()));
            (productsWithName.length) ?
            res.send(productsWithName)
            : res.status(404).send('Producto no encontrada');            
        } else {
            res.send(totalProducts);
        }

    } catch (err) {
        console.log(err);
        res.status(404).send('Problemas en el controlador de la ruta GET/products');
    }; 
});


router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        
        const result = await productsId(id);
        if (result) {
            return res.send(result);
        } else {
            res.status(404).send('Id no existente')
        };
    }
    catch(err) {
        res.status(404).send('Problemas en el controlador de la ruta GET/products/:id');
    }
   
})

module.exports = router;
